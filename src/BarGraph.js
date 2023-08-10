import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarGraph = () => {
  // Example data for the bar graph, replace with your data as needed
  const data = [
    { name: 'Category 1', y: 10 },
    { name: 'Category 2', y: 25 },
    { name: 'Category 3', y: 40 },
    { name: 'Category 4', y: 15 },
    { name: 'Category 5', y: 20 },
    { name: 'Category 6', y: 30 },
    { name: 'Category 7', y: 15 },
    { name: 'Category 8', y: 20 },
  ];

  // Bar graph configuration options
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Bar Graph',
    },
    xAxis: {
      categories: data.map(item => item.name), // Use the categories from data
    },
    yAxis: {
      title: {
        text: 'Value',
      },
    },
    series: [
      {
        name: 'Data',
        data: data.map(item => item.y), // Use the values from data
      },
    ],
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default BarGraph;
