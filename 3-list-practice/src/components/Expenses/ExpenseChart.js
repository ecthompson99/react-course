import Chart from '../Chart/Chart';

const ExpenseChart = props => {
    const chartItems = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]

    let maxValue = 0;

    for (let item of props.expenses) {
        const month = item.date.getMonth();
        chartItems[month].value += item.amount;
        maxValue = Math.max(maxValue, chartItems[month].value);
    }

    return <Chart items={chartItems} maxValue={maxValue} />
}

export default ExpenseChart;