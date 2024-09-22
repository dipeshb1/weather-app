import { getWeekday } from "../Utilities";
import styles from "./ForecastCard.module.css";

export function ForecastCard({ data, isCelcius }) {
  const {
    day: {
      maxtemp_c,
      maxtemp_f,
      mintemp_c,
      mintemp_f,
      condition: { text, icon },
      avghumidity,
      totalprecip_mm,
    },
    date,
  } = data;

  const weekday = getWeekday(date);

  return (
    <div className={styles.card}>
      <div className={styles.week}>{weekday}</div>
      <img src={icon} alt="weather" />
      <div className={styles.weather}>{text}</div>
      <div className={styles.temperature}>
        <span>{isCelcius ? maxtemp_c : maxtemp_f}°</span>/
        {isCelcius ? mintemp_c : mintemp_f}°
      </div>
      <div className={styles.humidity}>
        <div className={styles.label}>Humidity</div>
        <div className={styles.value}>{avghumidity}</div>
      </div>
      <div className={styles.humidity}>
        <div className={styles.label}>Precip.</div>
        <div className={styles.value}>{`${totalprecip_mm}`}</div>
      </div>
    </div>
  );
}
