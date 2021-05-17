import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ filteredExpenses }) => {

    if (filteredExpenses.length) {
        return (
            <ul className='expenses-list'>
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </ul>
        )
    } else {
        return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
    }
}

export default ExpensesList;