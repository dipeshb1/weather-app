import { useWeatherData } from "../useWeatherAPI";
import Error from "./Error";
import { ForecastCard } from "./ForecastCard";
import Loader from "./Loader";
import styles from "./WeatherForecast.module.css";

function WeatherForecast({ city, isCelcius }) {
  const { weatherData, loading, error } = useWeatherData(city, 6, true);

  if (loading) return <Loader />;
  if (error) return <Error errorMessage={error} />;

  const data = weatherData?.forecast?.forecastday;

  return (
    <div className={styles.card}>
      <h2 className={styles.header}>5 Days forecast</h2>
      <div className={styles.items}>
        {data &&
          data.map((item) => {
            return (
              <div key={item.date} className={styles.item}>
                <ForecastCard data={item} isCelcius={isCelcius} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default WeatherForecast;
