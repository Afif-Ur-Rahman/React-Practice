/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  
  const currencyData = async (currency) => {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    );
    const result = await response.json();
    setData(result[currency]);
  };
  useEffect(() => {
    currencyData(currency);
  }, [currency]);
  console.log(data);
  return data;
};

export default useCurrencyInfo;
