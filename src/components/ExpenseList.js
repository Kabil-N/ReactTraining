import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'
const ExpenseList = props =>{
    // let expenseContent=<p>No Expense Found.</p>

    if(props.items.length===0)
    {
        return <h2 className="expenses-list__fallback"> No Expenses Found.</h2>
    }

    return (
        <li>
            <ul className="expenses-list">
                {props.items.map((expense) =>
                (
                    <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />

                ))}
            </ul>
        </li>
    )
}

export default ExpenseList;