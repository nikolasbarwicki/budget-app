import React from 'react';
import { Doughnut, Chart } from 'react-chartjs-2';

Chart.defaults.global.legend.display = true;

const data = () => {
  return {
    labels: ['Spent', 'Remaining'],
    datasets: [
      {
        label: 'Spent',
        backgroundColor: ['rgba(255, 99, 132, 0.5)'],
        data: [24500, 3000],
      },
    ],
  };
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const BudgetHistory = () => {
  return <Doughnut data={data} width="100%" height={300} options={options} />;
};

export default BudgetHistory;
