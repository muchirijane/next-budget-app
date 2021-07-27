import ExpenseItem from './ExpenseItem';
import styles from './ExpenseList.module.css';
export default function ExpenseList({ expense }) {
	let expensesContent = <p className={styles['expenses-list__fallback']}>No Expenses found</p>;
	if (expense.length > 0) {
		expensesContent = expense.map((expense) => <ExpenseItem key={expense.id} expense={expense} />);
	}
	return <div className={styles['expenses-list']}>{expensesContent}</div>;
}
