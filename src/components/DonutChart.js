import React, { useContext } from 'react';
import { Doughnut, Chart } from 'react-chartjs-2';
import { GlobalContext } from 'context/GlobalState';
import moment from 'moment';

Chart.defaults.global.legend.display = true;

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const DonutChart = () => {
  const currMonth = moment().month();

  const { expenses } = useContext(GlobalContext);
  const currExpenses = expenses[currMonth];

  const categories = [
    ...new Set(
      currExpenses.map((item) => {
        return item.category;
      }),
    ),
  ];

  const calcCategoryExpenses = (cat) => {
    return [...currExpenses.filter(({ category }) => category === cat)].reduce((sum, item) => {
      return sum + item.amount;
    }, 0);
  };

  const categoryExpenses = categories.map((item) => {
    return calcCategoryExpenses(item);
  });

  const data = () => {
    return {
      labels: categories,
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
          data: categoryExpenses,
        },
      ],
    };
  };

  return <Doughnut data={data} height={300} options={options} />;
};

export default DonutChart;
