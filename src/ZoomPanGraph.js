import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsStock from 'highcharts/highstock'; // Import Highstock

const ZoomPanGraph = () => {
  // Example data for the zoom and pan graph, replace with your data as needed
  const data = [
    { name: 'Category 1', y: 10 },
    { name: 'Category 2', y: 25 },
    { name: 'Category 3', y: 40 },
    { name: 'Category 4', y: 15 },
    { name: 'Category 5', y: 20 },
  ];

  // Zoom and pan graph configuration options
  const options = {
    chart: {
      zoomType: 'x', // Enable X-axis zooming
    },
    title: {
      text: 'Zoom and Pan Graph',
    },
    xAxis: {
      type: 'datetime', // Specify the X-axis type as datetime for time-based data
    },
    yAxis: {
      title: {
        text: 'Value',
      },
    },
    series: [
      {
        name: 'Data',
        data, // Use the data points provided
      },
    ],
  };

  return (
    <HighchartsReact highcharts={HighchartsStock} options={options} />
  );
};

export default ZoomPanGraph;
