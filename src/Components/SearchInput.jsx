import { useState } from "react";
import styles from "./SearchInput.module.css";

const cities = [
  "Nagpur",
  "Hyderabad",
  "Delhi",
  "Mumbai",
  "Chennai",
  "Kolkata",
  "Bengaluru",
  "New York",
];

export default function SearchInput({ handleCity }) {
  const [searchCity, setSearchCity] = useState("");
  const [filteredCities, SetFilteredCities] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  function handleChange(e) {
    const input = e.target.value;
    setSearchCity(input);
    setIsVisible(input.length > 0);
    SetFilteredCities(
      cities.filter((city) =>
        city.toLocaleLowerCase().includes(input.toLocaleLowerCase())
      )
    );
  }

  function handleClick(city) {
    setSearchCity(city);
    handleCity(city);
    setIsVisible(false);
  }
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={searchCity}
        onChange={handleChange}
        onFocus={() => setIsVisible(true)}
        placeholder="Search City..."
        className={styles.searchinput}
      />
      {isVisible && filteredCities.length > 0 && (
        <div className={styles.dropdown}>
          {filteredCities.map((city, i) => (
            <div
              key={i}
              onClick={() => handleClick(city)}
              className={styles.item}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
