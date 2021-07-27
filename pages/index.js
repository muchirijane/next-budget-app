import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Expenses from '../components/Expenses/Expenses';
import NewExpense from '../components/NewExpenses/NewExpense';
export default function Home() {
	const InitialData = [
		{
			id: 'e1',
			title: 'Toilet Paper',
			amount: 94.12,
			date: new Date(2020, 7, 14)
		},
		{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
		{
			id: 'e3',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2021, 2, 28)
		},
		{
			id: 'e4',
			title: 'New Desk (Wooden)',
			amount: 450,
			date: new Date(2021, 5, 12)
		}
	];

	const [ expenses, setExpenses ] = useState(InitialData);

	const addedExpenseHandler = (expenseData) => {
		const newExpenseData = {
			expenseData,
			...expenses
		};
		setExpenses((prevExpenses) => [ expenseData, ...prevExpenses ]);
		console.log(newExpenseData);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Budgetfy App 😎</title>
				<meta
					name="description"
					content="Budgetfy App is a budget app created with Next Js to show you how you manged your expenses through out the years and months."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Budgetfy App</h1>

				<section>
					<NewExpense onAddExpenseData={addedExpenseHandler} />
					<Expenses expenseItems={expenses} />
				</section>
			</main>

			<footer className={styles.footer}>
				<a href="https://github.com/muchirijane" target="_blank" rel="noopener noreferrer">
					Powered by{' '}
					<span className={styles.logo} role="img">
						{' '}
						☕{' '}
					</span>
					and coded by Jane Muchiri
				</a>
			</footer>
		</div>
	);
}
