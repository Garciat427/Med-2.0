import React from "react";
import { Pie } from 'react-chartjs-2';
import "./style.css";
import Helper from "../../utils/Helper";

function PieChart(props) {

    let data = buildPieChartData(props.labels, props.chartData, new Helper().getRandomColourList(props.labels));

    // show the pie chart if there is data. Otherwise, show a message saying no data found.
    let pieChartToShow =  (props.labels.length > 0) ? <Pie data={data} /> : <div className='center-align'>Sorry, No results were found for the current city</div>;

    return (
        <div className="pie-size">
            {pieChartToShow}
        </div>
    );

}

//
const buildPieChartData = (labelIn, dataIn, colorList) => {
    const data = {
        labels: labelIn,
        datasets: [{
            data: dataIn,
            backgroundColor: colorList,
            hoverBackgroundColor: colorList
        }]
    };
    return data;
};


export default PieChart;
