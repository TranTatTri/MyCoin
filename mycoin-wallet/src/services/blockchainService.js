import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider('e373a557d35146e3ab43af1089ff2d01');

export const getAccountStats = async (address) => {
  const balance = await provider.getBalance(address);
  const txCount = await provider.getTransactionCount(address);
  return {
    balance: ethers.utils.formatEther(balance),
    txCount,
  };
};

export const sendTransaction = async (fromAddress, privateKey, toAddress, amount) => {
  const wallet = new ethers.Wallet(privateKey, provider);
  const tx = await wallet.sendTransaction({
    to: toAddress,
    value: ethers.utils.parseEther(amount),
  });
  return tx.hash;
};

export const getTransactionHistory = async (address) => {
  const history = await provider.getHistory(address);
  return history.map(tx => ({
    hash: tx.hash,
    from: tx.from,
    to: tx.to,
    amount: ethers.utils.formatEther(tx.value),
  }));
};

//Người dùng cần có khả năng "stake" (khóa) một lượng coin của họ để tham gia vào việc xác nhận giao dịch.
let stakers = {}; // Lưu thông tin về số coin mà mỗi người dùng đang stake

function stakeCoins(address, amount) {
  if (!stakers[address]) {
    stakers[address] = 0;
  }
  stakers[address] += amount; // Người dùng stake số coin vào hệ thống
}

//Hàm selectValidator sẽ chọn người xác nhận giao dịch mới dựa trên lượng coin mà họ đang stake:
function selectValidator() {
  let totalStake = Object.values(stakers).reduce((acc, stake) => acc + stake, 0);
  let random = Math.random() * totalStake;

  for (let [address, stake] of Object.entries(stakers)) {
    if (random < stake) {
      return address; // Chọn người xác nhận có số lượng stake cao nhất
    }
    random -= stake;
  }
}

//Mỗi khi có giao dịch mới cần xác nhận, bạn sẽ sử dụng hàm selectValidator để chọn người xác nhận giao dịch. 
//Người xác nhận này sẽ tạo khối mới và nhận phần thưởng dựa trên lượng coin mà họ đã stake.
function validateTransaction(transaction) {
  const validator = selectValidator();
  if (validator) {
    // Validator xác nhận giao dịch
    console.log(`${validator} xác nhận giao dịch`);
    // Thêm logic để validator tạo khối mới
  }
}

//Người xác nhận giao dịch sẽ nhận một phần thưởng (reward)
function rewardValidator(validatorAddress, rewardAmount) {
  if (!stakers[validatorAddress]) {
    stakers[validatorAddress] = 0;
  }
  stakers[validatorAddress] += rewardAmount; // Thưởng cho người xác nhận
}
