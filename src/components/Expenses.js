import "./Expenses.css"
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
    const [newYear, setNewYear] = useState("2021");


    function newYearHandler(newYear) {
        setNewYear(newYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === newYear;
    })

    return (
        <div className="expenses">
            <ExpenseFilter defaultYear={newYear} onYearChoice={newYearHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList filteredExpenses={filteredExpenses} />
        </div>
    );
}