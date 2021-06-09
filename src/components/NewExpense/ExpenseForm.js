import React,{ useState } from 'react';

import './ExpenseForm.css';
const ExpenseForm=(props)=>
{
    const [enteredTitle,setEnteredTitle]=useState('');
    const titleChangeHandler=(event)=>{
        //console.log(event.target.value);
        setEnteredTitle(event.target.value);

        
    }

    const [enteredAmount,setEnteredAmount]=useState('');
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }

    const [enteredDate,setEnteredDate]=useState('');
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }

    const submitHandler =(event) =>{
        event.preventDefault();

        const expenseData={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    

    return(
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="100" step="10" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min='2020-01-01' max='2021-10-10'  value={enteredDate} onChange={dateChangeHandler}/>
            </div>
            <div clasName='new-expense__actions'>
                <button onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
    );
}
export default ExpenseForm;