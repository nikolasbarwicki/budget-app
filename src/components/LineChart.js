import React from 'react';
import { Line, Chart } from 'react-chartjs-2';

Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.legend.display = false;
Chart.defaults.global.animation.duration = 1500;

const data = (canvas) => {
  const context = canvas.getContext('2d');
  const gradientBlue = context.createLinearGradient(0, 0, 0, 250);
  gradientBlue.addColorStop(0, 'rgba(0, 90, 255, 0.3)');
  gradientBlue.addColorStop(1, 'rgba(255, 255, 255, 0)');

  const gradientRed = context.createLinearGradient(0, 0, 0, 250);
  gradientRed.addColorStop(0, 'rgb(255, 99, 132, 0.3)');
  gradientRed.addColorStop(1, 'rgba(255, 255, 255, 0)');

  return {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Income',
        backgroundColor: gradientBlue,
        borderColor: 'rgba(44, 130, 201, 1)',
        data: [10, 12, 11, 14, 16, 11, 10, 12, 11, 14, 16, 11],
      },
      {
        label: 'Expenses',
        backgroundColor: gradientRed,
        borderColor: 'rgb(255, 99, 132)',
        data: [13, 8, 7, 8, 9, 14, 13, 6, 7, 8, 6, 9],
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
        ticks: { display: true },
        gridLines: {
          display: true,
          drawBorder: true,
        },
      },
    ],
  },
};

const LineChart = () => {
  return <Line data={data} width="100%" height={300} options={options} />;
};

export default LineChart;
