import ExpenseForm from './ExpenseForm';

import styles from './NewExpense.module.css';
export default function NewExpense(props) {
	const newExpenseHandler = (userExpenseData) => {
		const expenseData = {
			...userExpenseData,
			id: Math.random().toString()
		};
		console.log(expenseData);
		props.onAddExpenseData(expenseData);
	};

	return (
		<div className={styles['new-expense']}>
			<ExpenseForm onNewExpenseData={newExpenseHandler} />
		</div>
	);
}
