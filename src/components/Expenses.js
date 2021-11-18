import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import { useState } from "react";

export default function Expenses(props) {
    const [newYear, setNewYear] = useState("2021");


    function newYearHandler(newYear) {
        setNewYear(newYear);
    }

    return (
        <div className="expenses">
            <ExpenseFilter defaultYear={newYear} onYearChoice={newYearHandler} />
            {props.expenses.map(expense => {
                return (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                );
            })}
        </div>
    );
}