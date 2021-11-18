import React from "react";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {

    function newExpenseHandler(newData) {
        let newExpenseData = {
            id: Math.floor(Math.random() * 100000 + 1).toString(),
            ...newData
        };
        props.onExpenseCreated(newExpenseData);
    };

    return (
        <ExpenseForm onFormSubmit={newExpenseHandler} />
    );
}