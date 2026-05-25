import WeatherCard from "../WeatherCard/WeatherCard";

import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const RECOMMENDATION_LIMIT = 6;

function Main({ weatherData, onCardClick, onCardLike, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temperature =
    currentTemperatureUnit === "F" ? weatherData.temp.F : weatherData.temp.C;
  const weatherType = weatherData.type || "default";
  const weatherLabel =
    weatherType === "hot"
      ? "hot-weather"
      : weatherType === "cold"
        ? "cold-weather"
        : "weather-ready";
  const filteredClothingItems = clothingItems.filter((item) => {
    return item.weather === weatherData.type;
  }).slice(0, RECOMMENDATION_LIMIT);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className={`cards cards_weather_${weatherType}`}>
        <div className="cards__header">
          <div className="cards__heading-group">
            <p className="cards__eyebrow">Outfit recommendations</p>
            <h2 className="cards__title">Your WeatherFit for today</h2>
          </div>
          <p className="cards__summary">
            <span>
              {temperature}&deg; {currentTemperatureUnit}
            </span>
            <span>{weatherData.city || "Local forecast"}</span>
            <span>{weatherLabel}</span>
          </p>
        </div>
        <p className="cards__text">
        These pieces are selected to match today’s weather conditions
        </p>
        <ul className="cards__list">
          {filteredClothingItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
