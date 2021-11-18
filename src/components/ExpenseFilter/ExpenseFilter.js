import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

export default function ExpenseFilter(props) {
    const [newYear, setNewYear] = useState();

    function newYearHandler(event) {
        setNewYear(event.target.value);
        props.onYearChoice(event.target.value);
    }

    return (
        <Container className="text-white">
            <Row>
                <Col>Image</Col>
                <Col xl={3}>
                    <Form.Select value={props.defaultYear} aria-label="Select year" onChange={newYearHandler} >
                        <option disabled >Select year</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                    </Form.Select>
                </Col>
            </Row>
        </Container>
    );
}