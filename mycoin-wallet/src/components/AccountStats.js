import React, { useState, useEffect } from 'react';
import { getAccountStats } from '../services/blockchainService';
import { useNavigate } from 'react-router-dom';

const AccountStats = ({ address }) => {
  const navigate = useNavigate();
  /*const [stats, setStats] = useState(null);

  useEffect(() => {
    const address = 'user_wallet_address';
    getAccountStats(address).then(data => setStats(data)); 
  }, []);

  if (!stats) {
    return <div>Loading...</div>;
  }*/

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
      <h2>Thống kê tài khoản</h2>
      <div style={{ margin: '10px 0' }}>
        <strong>Địa chỉ ví:</strong>
      </div>
      <div style={{ margin: '10px 0' }}>
        <strong>Số dư:</strong> 
      </div>
      <div style={{ margin: '10px 0' }}>
        <strong>Số lượng giao dịch:</strong>
      </div>
      <div style={{ margin: '10px 0' }}>
        <strong>Tổng lượng gửi:</strong>
      </div>
      <div style={{ margin: '10px 0' }}>
        <strong>Tổng lượng nhận:</strong>
      </div>
      <button onClick={() => navigate(-1)} style={{ marginTop: '20px' }}>Back</button> {/* Nút "Back" */}
    </div>
  );
};

export default AccountStats;
