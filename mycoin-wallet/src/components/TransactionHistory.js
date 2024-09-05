import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Giả lập gọi API để lấy danh sách giao dịch
    const fetchTransactions = async () => {
      // Thay thế phần này bằng gọi API thực tế
      const fakeTransactions = [
        { hash: '0x1a2b...', date: '2024-08-30', from: '0xabc...', to: '0xdef...', amount: 50 },
        { hash: '0x2b3c...', date: '2024-08-29', from: '0x123...', to: '0x456...', amount: 100 },
        // Thêm nhiều giao dịch giả lập khác
      ];
      setTransactions(fakeTransactions);
    };

    fetchTransactions();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
      <h2>Lịch sử giao dịch</h2>
      <table border="1" style={{ width: '80%', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th>Hash giao dịch</th>
            <th>Ngày giao dịch</th>
            <th>Người gửi</th>
            <th>Người nhận</th>
            <th>Số lượng MyCoin</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>{tx.hash}</td>
              <td>{tx.date}</td>
              <td>{tx.from}</td>
              <td>{tx.to}</td>
              <td>{tx.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Back</button> {/* Nút "Back" */}
    </div>
  );
}

export default TransactionHistory;
