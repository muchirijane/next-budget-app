import React from 'react';
import ChartBar from './ChartBar';
import styles from './Chart.module.css';
export default function Chart({ dataPoints }) {
	const datapointsValues = dataPoints.map((dataPoint) => dataPoint.value);
	console.log(datapointsValues)
	const totalMax = Math.max(...datapointsValues);
	return (
		<div className={styles.chart}>
			{dataPoints.map((dataPoint) => (
				<ChartBar key={dataPoint.label} label={dataPoint.label} maxValue={totalMax} value={dataPoint.value} />
			))}
		</div>
	);
}
