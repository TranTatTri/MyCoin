import React, { useState } from 'react';
import WalletCreate from './components/WalletCreate';
import AccountStats from './components/AccountStats';
import SendCoin from './components/SendCoin';
import TransactionHistory from './components/TransactionHistory';

const App = () => {
  const [wallet, setWallet] = useState(null);

  return (
    <div>
      <h1>MyCoin Wallet</h1>
      <WalletCreate setWallet={setWallet} />
      {wallet && (
        <>
          <AccountStats address={wallet.address} />
          <SendCoin fromAddress={wallet.address} privateKey={wallet.privateKey} />
          <TransactionHistory address={wallet.address} />
        </>
      )}
    </div>
  );
};

export default App;
