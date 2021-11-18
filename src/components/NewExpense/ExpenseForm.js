import React, { Fragment } from "react";
import { Form, Button, Container, FloatingLabel, Card, Col, Row } from "react-bootstrap";
import './ExpenseForm.css'

export default function ExpenseForm() {

    return (
        <Fragment >
            <Container className="d-flex justify-content-center" >
                <Card style={{ width: '50rem' }} className="card-bg" >
                    <Form className="m-auto">
                        <Row>
                            <Col md>
                                <FloatingLabel controlId="title-input" label="What did you buy?" className="my-2" >
                                    <Form.Control placeholder="Title" aria-label="Title" type="text" />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="amount-input" label="How much £ ?" className="my-2" >
                                    <Form.Control placeholder="Amount" aria-label="Amount" type='number' min="0.01" step="0.01" />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="date-input" label="When ?" className="my-2" >
                                    <Form.Control aria-label="Date" type="date" />
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