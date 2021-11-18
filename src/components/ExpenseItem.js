import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

export default function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    function changeTitleHandler() {
        setTitle("Updated!");
    }

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">£{props.amount}</div>
            </div>
            <Button onClick={changeTitleHandler} variant="primary">Change Title</Button>
        </div>
    );
}