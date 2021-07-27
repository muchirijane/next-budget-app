import { useState, useReducer } from 'react';
import styles from './ExpenseForm.module.css';

const titleReducer = (state, action) => {
	if (action.type === 'USER__TITLE') {
		return { value: action.value };
	}

	return { value: '' };
};
const amountReducer = (state, action) => {
	if (action.type === 'USER__AMOUNT') {
		return { value: action.value };
	}
	return { value: '' };
};
const dateReducer = (state, action) => {
	if (action.type === 'USER__DATE') {
		return { value: action.value };
	}
	return { value: '' };
};
export default function ExpenseForm(props) {
	const [ titleState, dispatchTitle ] = useReducer(titleReducer, { value: '' });
	const [ amountState, dispatchAmount ] = useReducer(amountReducer, { value: '' });
	const [ dateState, dispatchDate ] = useReducer(dateReducer, { value: '' });
	const titleHander = (e) => {
		dispatchTitle({ type: 'USER__TITLE', value: e.target.value });
	};
	const amountHandler = (e) => {
		dispatchAmount({ type: 'USER__AMOUNT', value: e.target.value });
	};
	const dateHandler = (e) => {
		dispatchDate({ type: 'USER__DATE', value: e.target.value });
	};
	const submitHandler = (e) => {
		e.preventDefault();
		const userExpenses = {
			title: titleState.value,
			amount: amountState.value,
			date: new Date(dateState.value)
		};
		props.onNewExpenseData(userExpenses);

		titleState.value = '';
		amountState.value = '';
		dateState.value = '';
		console.log(userExpenses);
	};
	return (
		<form onSubmit={submitHandler}>
			<div className={styles['new-expense__controls']}>
				<div className={styles['new-expense__control']}>
					<label>Title </label>
					<input type="text" name="title" value={titleState.value} onChange={titleHander} />
				</div>
				<div className={styles['new-expense__control']}>
					<label>Amount </label>
					<input type="number" name="amount" value={amountState.value} onChange={amountHandler} />
				</div>
				<div className={styles['new-expense__control']}>
					<label>Date </label>
					<input
						type="date"
						name="date"
						min="01-01-2019"
						max="31-12-22"
						value={dateState.value}
						onChange={dateHandler}
					/>
				</div>
				<div className={styles['new-expense__actions']}>
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	);
}
