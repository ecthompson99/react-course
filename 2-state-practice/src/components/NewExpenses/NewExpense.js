import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {

    const newExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSubmitExpense={newExpenseHandler} />
        </div>
    )
}

export default NewExpense;