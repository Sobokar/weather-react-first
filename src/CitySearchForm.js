import React, { useState } from "react";
import axios from "axios";
import "./CitySearchForm.css";

export default function CitySearchForm() {
  let [city, setCity] = useState(null);
  let [forecast, setForecast] = useState({});
  let [loaded, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);
    setForecast({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=57821c3b75b60c68ecd1a8d0dd1aa8d3&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        className="citySearchField"
        onChange={updateCity}
      />
      <input type="submit" value="Search" className="citySearchButton" />
    </form>
  );

  if (loaded) {
    return (
      <div className="searchForm">
        {form}

        <ul>
          <li>Temperature: {Math.round(forecast.temperature)}°C</li>
          <li>Description: {forecast.description}</li>
          <li>Humidity: {forecast.humidity}%</li>
          <li>Wind: {forecast.wind}km/h</li>
          <img src={forecast.icon} alt={forecast.description} />
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
