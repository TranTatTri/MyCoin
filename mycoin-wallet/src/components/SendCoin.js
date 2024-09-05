import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SendCoin() {
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleSend = () => {
    // Thực hiện gửi giao dịch ở đây
    console.log(`Sending ${amount} MyCoin to ${recipientAddress}`);
    // Reset fields after sending
    setRecipientAddress('');
    setAmount('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
      <h2>Gửi coin cho một địa chỉ khác</h2>
      <div style={{ margin: '10px 0' }}>
        <label>
          Địa chỉ ví nhận:
          <input
            type="text"
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
            style={{ marginLeft: '10px', width: '300px' }}
          />
        </label>
      </div>
      <div style={{ margin: '10px 0' }}>
        <label>
          Số lượng coin:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ marginLeft: '10px', width: '300px' }}
          />
        </label>
      </div>
      <button onClick={handleSend} style={{ margin: '20px 0' }}>Send</button>
      <button onClick={() => navigate(-1)}>Back</button> {/* Nút "Back" */}
    </div>
  );
}

export default SendCoin;
