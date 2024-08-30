import React, { useState, useEffect } from 'react';
import { getAccountStats } from '../services/blockchainService';

const AccountStats = ({ address }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (address) {
      getAccountStats(address).then(data => setStats(data));
    }
  }, [address]);

  return (
    <div>
      <h2>Thống kê tài khoản</h2>
      {stats ? (
        <div>
          <p>Số dư: {stats.balance}</p>
          <p>Số giao dịch: {stats.txCount}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AccountStats;
