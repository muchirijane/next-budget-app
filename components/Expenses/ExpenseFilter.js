import { useState } from 'react';
import styles from './ExpenseFilter.module.css';
export default function ExpenseFilter(props) {
	const yearHandler = (e) => {
		const year = e.target.value;
		props.onGetSeletedYear(year);
		console.log(year);
	};
	return (
		<div className={styles['expenses-filter']}>
			<div className={styles['expenses-filter__control']}>
				<label>Filter by year</label>
				<select value={props.value} onChange={yearHandler}>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
}
