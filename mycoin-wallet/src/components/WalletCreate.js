import React, { useState } from 'react';
import { generateWallet } from '../services/walletService';

const WalletCreate = () => {
  const [wallet, setWallet] = useState(null);

  const handleCreateWallet = () => {
    const newWallet = generateWallet();
    setWallet(newWallet);
  };

  return (
    <div>
      <h2>Tạo Ví</h2>
      <button onClick={handleCreateWallet}>Tạo ví mới</button>
      {wallet && (
        <div>
          <p>Private Key: {wallet.privateKey}</p>
          <p>Address: {wallet.address}</p>
        </div>
      )}
    </div>
  );
};

export default WalletCreate;
