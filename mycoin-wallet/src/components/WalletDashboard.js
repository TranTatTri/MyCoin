import React from 'react';
import { useNavigate } from 'react-router-dom';

function WalletDashboard() {
  const navigate = useNavigate();

  const handleViewAccountStats = () => {
    navigate('/account-stats');
  };

  const handleSendCoin = () => {
    navigate('/send-coin');
  };

  const handleViewTransactionHistory = () => {
    navigate('/transaction-history');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h2>Wallet Dashboard</h2>
      <button onClick={handleViewAccountStats}>Xem thống kê tài khoản</button>
      <button onClick={handleSendCoin}>Gửi coin cho một địa chỉ khác</button>
      <button onClick={handleViewTransactionHistory}>Xem lịch sử giao dịch</button>
    </div>
  );
}

export default WalletDashboard;
