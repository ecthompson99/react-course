import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import AddExpense from './AddExpense';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    toggleFormHandler();
  };

  const toggleFormHandler = () => {
    setShowForm((prevState) => !prevState);
  }

  return (
    <div className='new-expense'>
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={toggleFormHandler} />}
      {!showForm && <AddExpense onClick={toggleFormHandler} />}
    </div>
  );
};

export default NewExpense;
