import ExpenseItem from './ExpenseItem';

export default function ExpenseList({ expense }) {
	return (
		<div className="expense-list">
			{expense.map((expense) => <ExpenseItem key={expense.id} expense={expense} />)}
		</div>
	);
}
