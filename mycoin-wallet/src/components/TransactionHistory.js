import React, { useEffect, useState } from 'react';
import { getTransactionHistory } from '../services/blockchainService';

const TransactionHistory = ({ address }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (address) {
      getTransactionHistory(address).then(data => setHistory(data));
    }
  }, [address]);

  return (
    <div>
      <h2>Lịch sử giao dịch</h2>
      <ul>
        {history.map(tx => (
          <li key={tx.hash}>
            {tx.from} -&gt; {tx.to} : {tx.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
