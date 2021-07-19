import ExpenseList from './ExpenseList';
import styles from './Expenses.module.css';
import Card from '../UI/Card';
export default function Expenses({ expenseItems }) {
	return (
		<Card className={styles.expenses}>
			<ExpenseList expense={expenseItems} />
		</Card>
	);
}
