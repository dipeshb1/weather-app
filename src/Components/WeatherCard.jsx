import { useWeatherData } from "../useWeatherAPI";
import Error from "./Error";
import Loader from "./Loader";
import styles from "./WeatherCard.module.css";

function WeatherCard({ city, isCelcius, handleUnitsChange }) {
  const { weatherData, loading, error } = useWeatherData(city);
  console.log(weatherData);
  const {
    temp_c: tempC,
    temp_f: tempF,
    condition: { icon: iconUrl } = {},
    humidity,
    gust_kph,
    wind_kph,
    precip_mm,
  } = weatherData.current || {};

  if (loading) return <Loader />;
  if (error) return <Error errorMessage={error} />;
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>{city}</h2>
        <button className={styles.toggle} onClick={handleUnitsChange}>
          Show in{isCelcius ? "°F" : "°C"}
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={iconUrl} alt="Weather Icon" />
          <p className={styles.temp}>
            {isCelcius ? `${tempC}°C` : `${tempF}°F`}
          </p>
        </div>
        <div className={styles.rigth}>
          <div className={styles.dataitem}>
            <p className={styles.label}>Humidity</p>
            <p>{humidity}</p>
          </div>
          <div className={styles.dataitem}>
            <p className={styles.label}>Wind</p>
            <p>{`${wind_kph} Km/h`}</p>
          </div>
          <div className={styles.dataitem}>
            <p className={styles.label}>Wind Gusts</p>
            <p>{`${gust_kph} Km/h`}</p>
          </div>
          <div className={styles.dataitem}>
            <p className={styles.label}>Precipitation</p>
            <p>{`${precip_mm} mm`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
