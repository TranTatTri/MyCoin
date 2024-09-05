import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WalletCreate from './components/WalletCreate';
import CreateWalletForm from './components/CreateWalletForm';
import WalletSuccess from './components/WalletSuccess';
import AccessWallet from './components/AccessWallet';
import WalletDashboard from './components/WalletDashboard';
import AccountStats from './components/AccountStats'; 
import SendCoin from './components/SendCoin';
import TransactionHistory from './components/TransactionHistory';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WalletCreate />} />
          <Route path="/create-wallet" element={<CreateWalletForm />} />
          <Route path="/wallet-success" element={<WalletSuccess />} />
          <Route path="/access-wallet" element={<AccessWallet />} />
          <Route path="/wallet-dashboard" element={<WalletDashboard />} />
          <Route path="/account-stats" element={<AccountStats />} />
          <Route path="/send-coin" element={<SendCoin />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
