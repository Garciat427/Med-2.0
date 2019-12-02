import React from 'react';
import { Line } from 'react-chartjs-2';
// import "./style.css";
import Helper from "../../utils/Helper";



function LineChart(props) {

    const graphData = {
        labels: [],
        datasets: [
            {
                label: 'Count of Diagnosis in the past 4 weeks',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 5,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 100,
                data: []
            }
        ]
    };

    console.log("input");
    console.log(props.labels);
    console.log(props.chartData);

    graphData.labels = props.labels;
    graphData.datasets.label = props.headerLabel;
    graphData.datasets[0].data = props.chartData;


    let LineChartToShow = (props.labels.length > 0) ? <Line data={graphData} /> : <div className='center-align'>Sorry, No results were found for the current city</div>;

    return (
        <div>
            {LineChartToShow}
        </div>
    );

}

export default LineChart;