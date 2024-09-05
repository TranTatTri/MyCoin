import React from 'react';
import { useNavigate } from 'react-router-dom';

function WalletCreate() {
  const navigate = useNavigate();

  const handleCreateWallet = () => {
    navigate('/create-wallet');
  };

  const handleAccessWallet = () => {
    navigate('/access-wallet');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button onClick={handleCreateWallet}>Tạo Ví</button>
      <button onClick={handleAccessWallet}>Access My Wallet</button>
    </div>
  );
}

export default WalletCreate;
