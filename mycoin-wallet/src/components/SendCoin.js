import React, { useState } from 'react';
import { sendTransaction } from '../services/blockchainService';

const SendCoin = ({ fromAddress, privateKey }) => {
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionHash, setTransactionHash] = useState(null);

  const handleSendCoin = async () => {
    const hash = await sendTransaction(fromAddress, privateKey, toAddress, amount);
    setTransactionHash(hash);
  };

  return (
    <div>
      <h2>Gửi Coin</h2>
      <input
        type="text"
        placeholder="Địa chỉ người nhận"
        value={toAddress}
        onChange={e => setToAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Số lượng"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={handleSendCoin}>Gửi</button>
      {transactionHash && <p>Transaction Hash: {transactionHash}</p>}
    </div>
  );
};

export default SendCoin;
