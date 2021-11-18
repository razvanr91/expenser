import React from "react";
import { Container } from "react-bootstrap";
import ChartBar from './ChartBar';
import './Chart.css'

export default function Chart(props) {
    let chartDataValues = props.chartData.map(dataPoint => dataPoint.value);

    let maxValueData = Math.max(...chartDataValues);

    return (
        <Container className="chart mt-2">
            {props.chartData.map(dataPoint => {
                return <ChartBar value={dataPoint.value} key={dataPoint.label} label={dataPoint.label} maxValue={maxValueData} />
            })}
        </Container>
    );
};