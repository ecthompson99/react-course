import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
    return (
        <div className='chart'>
            {props.items.map(item => (
                <ChartBar
                    id={item.label}
                    value={item.value}
                    maxValue={props.maxValue}
                    label={item.label}
                />
            ))}
        </div>
    )
}

export default Chart;