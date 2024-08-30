import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider('YOUR_BLOCKCHAIN_PROVIDER_URL');

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
