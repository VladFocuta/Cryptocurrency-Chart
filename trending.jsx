import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';

const Trending = ({ coins, selectedTime }) => {
  const [top5Coins, setTop5Coins] = useState([]);
  const [lowest5Coins, setLowest5Coins] = useState([]);
  const prevSelectedTime = useRef();

  useEffect(() => {

    const fetchData = async () => {
      try {
        const timeMap = {
          OneDay: 1,
          OneWeek: 7,
          OneMonth: 30,
          OneYear: 365,
        };

        const priceDataPromises = coins.map(async (coin) => {
          const apiUrl = `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=${timeMap[selectedTime]}`;
          const response = await axios(apiUrl);
          return {
            coinId: coin.id,
            prices: response.data ? response.data.prices : [],
          };
        });

        const priceDataArray = await Promise.all(priceDataPromises);

        priceDataArray.forEach((coinData) => {
          coinData.prices.sort((a, b) => b[1] - a[1]);
        });

        const top5 = priceDataArray.slice(0, 5);
        const lowest5 = priceDataArray.slice(5, 10);
        setLowest5Coins(lowest5);
        setTop5Coins(top5);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    if (selectedTime !== prevSelectedTime.current) {
      fetchData();
      prevSelectedTime.current = selectedTime;
    }
    fetchData();

  }, [coins, selectedTime]);

  return (
    <div>
      <div className='trending'>
        <ul>
          <p className='fs-3'>Up-Trending</p>
          {top5Coins.map((coinData) => (
            <li key={coinData.coinId} className='d-sm-flex p-1 topTrendingText'>
              {coinData.coinId} - Highest Price: {coinData.prices[0][1]}
            </li>
          ))}
        </ul>
      </div>
      <div className='lowestTrending'>
        <ul>
          <p className='fs-3'>Down-Trending</p>
          {lowest5Coins.map((coinData) => (
            <li key={coinData.coinId} class="d-sm-flex p-1 lowesTrendingText" >
              {coinData.coinId} - Lowest Price: {coinData.prices[0][1]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Trending
