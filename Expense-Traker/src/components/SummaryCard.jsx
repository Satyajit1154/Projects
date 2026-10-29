function SummaryCard(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <h2>₹{props.amount.toLocaleString('en-IN')}</h2>
    </div>
  );
}

export default SummaryCard;