import React from 'react';
import { useNavigate } from 'react-router-dom';

function WalletSuccess() {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h2>Your wallet is ready</h2>
        <button onClick={handleFinish}>Finish</button>
      </div>
    </div>
  );
}

export default WalletSuccess;
