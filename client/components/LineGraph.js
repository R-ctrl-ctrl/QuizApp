// components/LineGraph.js

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineGraph = ({data}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy previous chart instance
      }
      const ctx = chartRef.current.getContext("2d");
      console.log(data)
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [{
            label: 'User Rank',
            data: data,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.1,
            fill: false,
          }]
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
              title: {
                display: true,
                text: 'Quizes'
              },
              ticks: {
                stepSize: 1 // Adjusting step size for x-axis
              }
            },
            y: {
              title: {
                display: true,
                text: 'Ranks'
              }
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Cleanup on unmount
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default LineGraph;
