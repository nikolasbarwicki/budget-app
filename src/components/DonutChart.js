import React from 'react';
import { Doughnut, Chart } from 'react-chartjs-2';

Chart.defaults.global.legend.display = true;

const data = () => {
  return {
    labels: ['Jedzenie', 'Picie', 'Zakupy', 'Piwo', 'Kupa'],
    datasets: [
      {
        label: 'Income',
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(44, 130, 201, 1)',
        ],
        data: [10, 12, 11, 14, 16],
      },
    ],
  };
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const DonutChart = () => {
  return <Doughnut data={data} width="100%" height={300} options={options} />;
};

export default DonutChart;
