import { Button, Container } from 'react-bootstrap'
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './ExpenseForm.css'

export default function NewExpense(props) {
    const [isCreating, setIsCreating] = useState(false);

    function newExpenseHandler(newData) {
        let newExpenseData = {
            id: Math.floor(Math.random() * 100000 + 1).toString(),
            ...newData
        };
        props.onExpenseCreated(newExpenseData);
        setIsCreating(false);
    };

    function createExpenseHandler() {
        setIsCreating(true);
    }

    function cancelCreateExpenseHandler() {
        setIsCreating(false);
    }

    return (
        <Container className="d-flex justify-content-center">
            {!isCreating && <Button onClick={createExpenseHandler} variant="success">Add expense</Button>}
            {isCreating && <ExpenseForm onFormSubmit={newExpenseHandler} onCancel={cancelCreateExpenseHandler} />}
        </Container>
    );
}