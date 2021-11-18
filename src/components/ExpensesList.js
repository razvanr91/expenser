import React from "react";
import { Alert } from "react-bootstrap";

import ExpenseItem from "./ExpenseItem";


export default function ExpensesList(props) {

    if (props.filteredExpenses.length === 0) {
        return <Alert variant="success" className="mt-2" >There are no expenses for this year.</Alert>
    }

    return (
        props.filteredExpenses.map(expense => {
            return (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            );
        })
    );
}