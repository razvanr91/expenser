import React, { Fragment, useState } from "react";
import { Form, Button, Container, FloatingLabel, Card, Col, Row } from "react-bootstrap";
import './ExpenseForm.css'

export default function ExpenseForm(props) {
    const [newTitle, setNewTitle] = useState("");
    const [newAmount, setNewAmount] = useState("");
    const [newDate, setNewDate] = useState("");

    function titleChangeHandler(event) {
        setNewTitle(event.target.value);
    }

    function amountChangeHandler(event) {
        setNewAmount(event.target.value);
    }

    function dateChangeHandler(event) {
        setNewDate(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        let newExpenseData = {
            title: newTitle,
            amount: parseInt(newAmount),
            date: new Date(newDate)
        };

        props.onFormSubmit(newExpenseData);

        setNewAmount("");
        setNewTitle("");
        setNewDate("");
    }

    return (
        <Fragment >
            <Container className="d-flex justify-content-center" >
                <Card className="card-bg" >
                    <Form className="m-auto" onSubmit={submitHandler} >
                        <Row>
                            <Col md>
                                <FloatingLabel controlId="title-input" label="What did you buy?" className="my-2" >
                                    <Form.Control placeholder="Title" aria-label="Title" type="text" value={newTitle} onChange={titleChangeHandler} />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="amount-input" label="How much £ ?" className="my-2" >
                                    <Form.Control placeholder="Amount" aria-label="Amount" type='number' value={newAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="date-input" label="When ?" className="my-2" >
                                    <Form.Control aria-label="Date" type="date" value={newDate} onChange={dateChangeHandler} />
                                </FloatingLabel>

                            </Col>
                        </Row>

                        <Form.Group className="my-2">
                            <Button type="submit" variant="success" >Add Expense</Button>
                        </Form.Group>
                    </Form>
                </Card>
            </Container>
        </Fragment>
    )
}