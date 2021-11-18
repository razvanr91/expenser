import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
    return (
        <div className="expenses">
            {props.expenses.map(expense => {
                return (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                );
            })}
        </div>
    );
}