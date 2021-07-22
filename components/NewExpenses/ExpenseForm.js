import { useState, useReducer } from 'react';
import styles from './ExpenseForm.module.css';
const titleReducer = (state, action) => {
	if (action.type === 'USER__TITLE') {
		console.log(action.value);
		return { value: action.value };
	}
	return { value: '' };
};
export default function ExpenseForm() {
	const [ titleState, dispatchTitle ] = useReducer(titleReducer, { value: '' });
	const titleHander = (e) => {
		dispatchTitle({ type: 'USER__TITLE', value: e.target.value });
	};
	return (
		<form>
			<div className={styles['new-expense__controls']}>
				<div className={styles['new-expense__control']}>
					<label>Title </label>
					<input type="text" name="title" value={titleState.value} onChange={titleHander} />
				</div>
				<div className={styles['new-expense__control']}>
					<label>Amount </label>
					<input type="number" name="amount" />
				</div>
				<div className={styles['new-expense__control']}>
					<label>Date </label>
					<input type="date" name="date" min="01-01-2019" max="31-12-22" />
				</div>
				<div className={styles['new-expense__actions']}>
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	);
}
