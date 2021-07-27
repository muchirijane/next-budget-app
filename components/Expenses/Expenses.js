import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
import styles from './Expenses.module.css';
import Card from '../UI/Card';
export default function Expenses({ expenseItems }) {
	const [ selectedYear, setSelectedYear ] = useState('2021');
	const filteredYearHandler = (filteredYear) => {
		console.log(filteredYear);
		setSelectedYear(filteredYear);
	};
	const filteredExpenses = expenseItems.filter((expense) => {
		const filteredYear = expense.date.getFullYear().toString();

		return filteredYear === selectedYear;
	});
	return (
		<Card className={styles.expenses}>
			<ExpenseFilter onGetSeletedYear={filteredYearHandler} value={selectedYear} />
			<ExpenseChart expenses={filteredExpenses} />
			<ExpenseList expense={filteredExpenses} />
		</Card>
	);
}
