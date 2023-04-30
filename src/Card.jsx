import { useState } from "react";

function Card({ cardVisible, icon, weather }) {
  const [unit, setUnit] = useState("C");

  return (
    <div className={`card ${cardVisible && "visible"}`}>
      <div className="middle fadeIn">
        <span className="temperature">
          {unit === "C"
            ? Math.round(weather.current.temp_c)
            : Math.round(weather.current.temp_f)}
        </span>
        <span
          className="celsius"
          onClick={() => setUnit("C")}
          style={{
            fontSize: unit === "C" ? "35px" : "",
            fontWeight: unit === "C" ? "400" : "",
            color: unit === "C" ? "black" : "",
          }}
        >
          °C
        </span>
        <span className="seperator">|</span>
        <span
          className="fahrenheit"
          onClick={() => setUnit("F")}
          style={{
            fontSize: unit === "F" ? "35px" : "",
            fontWeight: unit === "F" ? "400" : "",
            color: unit === "F" ? "black" : "",
          }}
        >
          °F
        </span>
        <img className="status" src={icon} />
      </div>
      <div className="container">
        <div className="block">
          <img
            className="precipitation"
            src="icons/1530362_cloudy_weather_forecast_rain_clouds.svg"
          />
          <span>{weather.current.precip_mm} mm</span>
        </div>
        <div className="block">
          <img
            className="humidity"
            src="icons/9772477_weather_humidity_rain_forecast_cloud_icon.svg"
          />
          <span>{weather.current.humidity}%</span>
        </div>

        <div className="block">
          <img
            className="wind"
            src="icons/8666815_wind_windy_weather_icon.svg"
          />
          <span>{weather.current.wind_kph} km/h</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
