import React, { useContext } from 'react';
import { Doughnut, Chart } from 'react-chartjs-2';
import { GlobalContext } from 'context/GlobalState';
import moment from 'moment';

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const SpentChart = () => {
  Chart.defaults.global.legend.display = true;
  const currMonth = moment().month();

  const { income, expenses } = useContext(GlobalContext);

  const currIncome = income[currMonth];
  const currExpenses = expenses[currMonth];

  const spent = currExpenses.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);
  const remaining = currIncome - spent;

  const data = () => {
    return {
      labels: ['Spent', 'Remaining'],
      datasets: [
        {
          label: 'Spent',
          backgroundColor: ['rgba(255, 99, 132, 0.5)'],
          data: [spent, remaining],
        },
      ],
    };
  };

  return <Doughnut data={data} height={300} options={options} />;
};

export default SpentChart;
