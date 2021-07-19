import React from 'react';
import Styles from './ExpenseItem.module.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
export default function ExpenseItem({ expense }) {
	return (
		<Card className={Styles['expense-item']}>
			<ExpenseDate date={expense.date} />
			<div className={Styles['expense-item__description']}>
				<h2>{expense.title}</h2>
				<div className={Styles['expense-item__price']}>${expense.amount}</div>
			</div>
		</Card>
	);
}
