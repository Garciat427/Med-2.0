import React from 'react';
import { Scatter } from 'react-chartjs-2';
import Helper from "../../utils/Helper";

function ScatterChart(props) {

    let graphData = {
        labels: ['Scatter'],
        datasets: [
            {
                label: 'My First dataset',
                fill: true,
                backgroundColor: 'rgba(75,192,192,0.4)',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#000',
                pointBorderWidth: 5,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [
                    { x: 65, y: 75 },
                    { x: 59, y: 49 },
                    { x: 80, y: 90 },
                    { x: 81, y: 29 },
                    { x: 56, y: 36 },
                    { x: 55, y: 25 },
                    { x: 40, y: 18 },
                ]
            }
        ]
    };

    // console.log("input");
    // console.log(props.labels);
    // console.log(props.chartData);

    // graphData.labels = props.labels;
    // graphData.datasets.label = props.headerLabel;
    // graphData.datasets[0].data = props.chartData;


    // let scatterChartToShow = (props.labels.length > 0) ? <Scatter data={graphData} /> : <div className='center-align'>Sorry, No results were found for the current city</div>;

    return (
        <div>
            {/* {scatterChartToShow} */}
            <Scatter data={graphData} />
        </div>
    );

}

export default ScatterChart;