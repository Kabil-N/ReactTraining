import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props)
{
    // const [title,setTitle]=useState(props.title);
    // const clickHandler=()=>{
    //     setTitle('Changed!');
    // }
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">Rs.{props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </div>
    );
}
export default ExpenseItem;