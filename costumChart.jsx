import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const CostumChart = ({ selectedCoin, selectedTime }) => {
  const canvasRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {

    if (selectedCoin && selectedTime) {
      const fetchData = async () => {
        try {
          const timeMap = {
            OneDay: 1,
            OneWeek: 7,
            OneMonth: 30,
            OneYear: 365,
          };
          const apiUrl = `https://api.coingecko.com/api/v3/coins/${selectedCoin.id}/market_chart?vs_currency=usd&days=${timeMap[selectedTime]}`;
          const response = await axios(apiUrl);

          const ctx = canvasRef.current.getContext('2d');

          const prices = response.data ? response.data.prices : [];
          const timestamps = prices.map(priceData => new Date(priceData[0]).toLocaleDateString());
          const values = prices.map(priceData => priceData[1]);

          if (chartInstance.current) {
            chartInstance.current.destroy();
          }

          chartInstance.current = new Chart(ctx, {
            type: 'line',
            data: {
              labels: timestamps,
              datasets: [
                {
                  label: 'Price',
                  data: values,
                  backgroundColor: 'blue',
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
            }
          });
        } catch (error) {
          console.error("Error fetching chart data:", error);
        }
      };

      fetchData();
    }
  }, [selectedCoin, selectedTime]);

  return (
    <div className="chart-container">
      <canvas ref={canvasRef} width={700} height={400}></canvas>
    </div>
  )
}
export default CostumChart;
