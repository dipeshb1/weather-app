import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

export function useWeatherData(city, days = 6, forecast = false) {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);
  console.log(city);

  console.log("Inside, the useWeatherAPI");

  let url = `https://api.weatherapi.com/v1/`;
  if (forecast) {
    url = `${url}forecast.json?key=${API_KEY}&q=${city}&days=${days}`;
  } else {
    url = `${url}current.json?key=${API_KEY}&q=${city}`;
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const key = forecast ? `${city}-forecast` : `${city}`;
        const cachedData = localStorage.getItem(key);
        if (!navigator.onLine && cachedData) {
          const parsedData = JSON.parse(cachedData);
          setWeatherData(parsedData);
        } else {
          const res = await fetch(url);
          const data = await res.json();
          setWeatherData(data);
          localStorage.setItem(key, JSON.stringify(data));
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [city, days, url, forecast]);

  return { weatherData, loading, error };
}
