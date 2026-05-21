import "./WeatherCard.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temperature =
    currentTemperatureUnit === "F" ? weatherData.temp.F : weatherData.temp.C;
  const weatherType = weatherData.type || "default";
  const conditionLabel =
    weatherType === "hot"
      ? "Warm and bright"
      : weatherType === "cold"
        ? "Cool and crisp"
        : "Loading forecast";
  const outfitHint =
    weatherType === "hot"
      ? "Built for breathable layers, shade, and easy movement."
      : weatherType === "cold"
        ? "Built for warm layers, coverage, and comfort."
        : "WeatherFit is checking your best outfit match.";

  return (
    <section className={`weather-card weather-card_type_${weatherType}`}>
      <div className="weather-card__content">
        <p className="weather-card__eyebrow">Today&apos;s forecast</p>
        <div className="weather-card__main">
          <p className="weather-card__temp">
            <span className="weather-card__temp-value">{temperature}</span>
            <span className="weather-card__degree">
              &deg;{currentTemperatureUnit}
            </span>
          </p>
          <div className="weather-card__details">
            <h1 className="weather-card__condition">{conditionLabel}</h1>
            <p className="weather-card__location">
              {weatherData.city || "Finding your location"}
            </p>
          </div>
        </div>
        <p className="weather-card__outfit-note">{outfitHint}</p>
      </div>
      <div className="weather-card__visual" aria-hidden="true">
        <div className="weather-card__sun"></div>
        <div className="weather-card__cloud weather-card__cloud_primary"></div>
        <div className="weather-card__cloud weather-card__cloud_secondary"></div>
      </div>
    </section>
  );
}

export default WeatherCard;
