import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AccessWallet() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAccess = (e) => {
    e.preventDefault();
    // Thực hiện logic kiểm tra thông tin đăng nhập
    // Nếu thành công thì điều hướng đến trang dashboard
    navigate('/wallet-dashboard');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleAccess}>
        <div>
          <label>Email address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Access</button>
      </form>
    </div>
  );
}

export default AccessWallet;
