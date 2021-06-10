import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
import ExpenseList from './ExpenseList';
import './Expenses.css';

function Expenses(props)
{
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpense=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    })

    
    return(
        <div className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {<ExpenseChart expenses={filteredExpense} />}
            {<ExpenseList items={filteredExpense} />}
            
            {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
            <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem> */}
        </div>
    );
}

export default Expenses;