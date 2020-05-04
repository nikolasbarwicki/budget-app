import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { GlobalContext } from 'context/GlobalState';

const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: true,
    position: 'right',
  },
};

const CategoriesChart = () => {
  // const currMonth = moment().month();

  const { expenses } = useContext(GlobalContext);
  const currExpenses = expenses[3];

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
          backgroundColor: ['#D83D7E', '#4C7EE8', '#3C424D', '#1F2158', '#76A3D0'],
          data: categoryExpenses,
        },
      ],
    };
  };

  return <Doughnut data={data} height={300} options={options} />;
};

export default CategoriesChart;
