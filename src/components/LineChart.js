import React, { useContext } from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { GlobalContext } from 'context/GlobalState';

const LineChart = () => {
  const { income, expense } = useContext(GlobalContext);

  // const spent = currExpenses.reduce((sum, item) => {
  //   return sum + item.amount;
  // }, 0);

  // console.log(spent);

  Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
  Chart.defaults.global.legend.display = false;
  Chart.defaults.global.animation.duration = 1500;

  const data = (canvas) => {
    const context = canvas.getContext('2d');
    const gradientBlue = context.createLinearGradient(0, 0, 0, 250);
    gradientBlue.addColorStop(0, 'rgba(0, 90, 255, 0.3)');
    gradientBlue.addColorStop(1, 'rgba(255, 255, 255, 0)');

    const gradientRed = context.createLinearGradient(0, 0, 0, 250);
    gradientRed.addColorStop(0, 'rgb(255, 99, 132, 0.5)');
    gradientRed.addColorStop(1, 'rgba(255, 255, 255, 0)');

    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'],
      datasets: [
        {
          label: 'Income',
          backgroundColor: gradientBlue,
          borderColor: 'rgb(44, 130, 201)',
          data: income,
        },
        {
          label: 'Expenses',
          backgroundColor: gradientRed,
          borderColor: 'rgb(255, 99, 132)',
          data: expense,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: { display: true },
          gridLines: {
            display: true,
            drawBorder: true,
          },
        },
      ],
      yAxes: [
        {
          ticks: { display: true, suggestedMin: 0, suggestedMax: 2000, stepSize: 500 },
          gridLines: {
            display: true,
            drawBorder: true,
          },
        },
      ],
    },
  };

  return <Line data={data} width="100%" height={300} options={options} />;
};

export default LineChart;
