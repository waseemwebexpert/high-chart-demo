import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = () => {
  // Example data for the pie chart, replace with your data as needed
  const data = [
    { name: 'Category 1', y: 25 },
    { name: 'Category 2', y: 30 },
    { name: 'Category 3', y: 20 },
    { name: 'Category 2', y: 15 },
    { name: 'Category 3', y: 10 },
  ];

  // Pie chart configuration options
  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Pie Chart',
    },
    series: [
      {
        name: 'Data',
        data, // Use the data provided
      },
    ],
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default PieChart;
