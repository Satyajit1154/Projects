import './App.css';
import Header from './components/Header';
import Summary from './components/summary';
import TransactionForm from './components/TransactionForm';
import { useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('all');
   
  function handleAddTransaction(transaction) {
    setTransactions((previousTransactions) => [
      ...previousTransactions,
      transaction,
    ]);
  }
  function handleDeleteTransaction(id) {
  setTransactions((previousTransactions) =>
    previousTransactions.filter(
      (transaction) => transaction.id !== id
    )
  );
}
  return (
    <div className="app">
      <Header />
      <Summary transactions={transactions}/>
      <TransactionForm 
      onAddTransaction={handleAddTransaction}
      />

    <h2>Transactions</h2>

    <div className="filters">
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('income')}>Income</button>
      <button onClick={() => setFilter('expense')}>Expense</button>
    </div>

     {transactions
      .filter((transaction) =>
        filter === 'all' ? true : transaction.type === filter
      )
       .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map((transaction) => (
     <div className="card" key={transaction.id}>
    
      <h3>{transaction.title}</h3>
      <p>Amount: ₹{transaction.amount}</p>
      <p className={transaction.type}>
      Type: {transaction.type === 'income' ? 'Income' : 'Expense'}
      </p>

    <button onClick={() => handleDeleteTransaction(transaction.id)}>
      Delete
    </button>
  </div>
))} 
    </div>
  );
}

export default App;