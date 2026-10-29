
import { useState } from 'react';

function TransactionForm(props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

function handleSubmit() {
    if (title.trim() === '' || amount === '' || Number(amount) <= 0) {
      alert('Please enter a title and a valid amount.');
      return;
}
    const newTransaction = {
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount),
      type: type,
      date:date,
    };

    props.onAddTransaction(newTransaction);
    // Data is passed down through props, 
    // but a child can trigger a parent update by calling a function 
    // it receives through props. 
    // This pattern is often called a callback prop.

    setTitle('');
    setAmount('');
    setType('expense');
    setDate(new Date().toISOString().split('T')[0]);
}




  return (
    <div className="transaction-form">
      <h2>Add Transaction</h2>

      <input
        type="text"
        placeholder="Enter transaction title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
    />

      <select
        value={type}
        onChange={(event) => setType(event.target.value)}
        >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
    </select>

      <button onClick={handleSubmit}>
        Add Transaction
      </button>
    </div>
  );
}

export default TransactionForm;

