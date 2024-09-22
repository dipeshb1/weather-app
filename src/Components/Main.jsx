import { useState } from "react";
import WeatherCard from "./WeatherCard";
import Header from "./Header";
import SearchInput from "./SearchInput";
import WeatherForecast from "./WeatherForecast";

import styles from "./Main.module.css";

function Main() {
  const [city, setCity] = useState("Nagpur");
  const [toggleCelcius, setToggleCelcius] = useState(true);

  function handleToggle() {
    setToggleCelcius((toggleCelcius) => !toggleCelcius);
  }

  function handleSubmit(city) {
    setCity(city);
  }

  return (
    <div>
      <div className={styles.header}>
        <Header />
        <SearchInput handleCity={handleSubmit} />
      </div>
      <WeatherCard
        city={city}
        isCelcius={toggleCelcius}
        handleUnitsChange={handleToggle}
      />
      <WeatherForecast city={city} isCelcius={toggleCelcius} />
    </div>
  );
}

export default Main;
