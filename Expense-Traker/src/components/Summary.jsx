import SummaryCard from './SummaryCard';


function Summary(props) {


const totalIncome = props.transactions
.filter((transaction) => transaction.type === 'income')
.reduce((total, transaction) => total + transaction.amount, 0);

const totalExpenses = props.transactions
.filter((transaction) => transaction.type === 'expense')
.reduce((total, transaction) => total + transaction.amount, 0);

  const totalBalance = totalIncome - totalExpenses;
  return (
    <div className="summary">
      <SummaryCard title="Total Balance" amount={totalBalance}className="balance-card" />
      <SummaryCard title="Total Income" amount={totalIncome}className="income-card" />
      <SummaryCard title="Total Expenses" amount={totalExpenses} className="expense-card" />

      
    </div>
  );
}

export default Summary;