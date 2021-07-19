import styles from './ExpenseDate.module.css';

export default function ExpenseDate({ date }) {
	const month = date.toLocaleString('en-UK', { month: 'long' });
	const day = date.toLocaleString('en-UK', { day: '2-digit' });
	const year = date.getFullYear();
	return (
		<div className={styles['expense-date']}>
			<div className={styles['expense-date__day']}>{day}</div>
			<div className={styles['expense-date__month']}>{month}</div>
			<div className={styles['expense-date__year']}>{year}</div>
		</div>
	);
}
