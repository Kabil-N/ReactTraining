import React,{ useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

    const [Editing,isEditing]=useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      props.onAddExpense(expenseData);
      isEditing(false);
    };
    const startEditing=()=>
    {
      isEditing(true);
    }
    const stopEditing=()=>
    {
      isEditing(false);
    }
    return (
      <div className='new-expense'>
        {!Editing && <button onClick={startEditing}>Add new Expense</button>}
        {Editing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}
      </div>
    );
  };
 export default NewExpense;