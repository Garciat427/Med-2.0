import React from 'react';
import { Line } from 'react-chartjs-2';



function LineChart(props) {
  
    const graphData = buildLineChartData(props.headerLabel, props.chartLabels, props.chartData)

    let LineChartToShow = (props.chartLabels.length > 0) ? <Line data={graphData} /> : <div className='center-align'>Sorry, No results were found.</div>;

    return (
        <div>
            {LineChartToShow}
        </div>
    );

}


const buildLineChartData = (headerLabel, chartLabels, chartData) => {
    const data = {
        labels: [],
        datasets: [
            {
                label: '',
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

    data.labels = chartLabels;
    data.datasets[0].label = headerLabel;
    data.datasets[0].data = chartData;

    return data;
};

export default LineChart;