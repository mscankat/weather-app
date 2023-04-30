import React, { useEffect, useState } from "react";

function App() {
  const [location, setLocation] = useState("");
  const [cardVisible, setCardVisible] = useState(false);
  const [icon, setIcon] = useState("");
  const [weather, setWeather] = useState({
    current: {},
  });
  useEffect(() => {
    const api = "13f2370015ba4cc49fa193438232704";
    const url = `http://api.weatherapi.com/v1/current.json?key=${api}&q=0aqi=yes`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
        console.log(weather);
      })
      .catch((error) => console.log(error));
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    const api = "13f2370015ba4cc49fa193438232704";
    const url = `http://api.weatherapi.com/v1/current.json?key=${api}&q=${location}&aqi=yes`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
        setCardVisible(true);
        document.querySelector(".main").style.height = "400px";
        document.querySelector(".main").style.width = "570px";
        setIconPath(data.current.condition.code);
        console.log(weather.current.condition.code);
        console.log(icon);
      })
      .catch((error) => console.log(error));
  }

  function setIconPath(code) {
    switch (String(code)) {
      case "1000":
        weather.current.is_day === 1
          ? setIcon("/icons/1530392_weather_sun_sunny_temperature.svg")
          : setIcon("/icons/1530382_weather_night_moon_moonlight.svg");
        break;
      case "1003":
        weather.current.is_day === 1
          ? setIcon("/icons/1530391_clouds_sun_sunny_weather.svg")
          : setIcon("/icons/1530383_moon_weather_clouds_cloudy.svg");
        break;
      case "1006":
        setIcon("/icons/1530369_cloudy_weather_clouds_cloud.svg");
        break;
      case "1009":
        setIcon("/icons/1530369_cloudy_weather_clouds_cloud.svg");
        break;
      case "1030":
        setIcon("/icons/1530368_foggy_weather_fog_clouds_cloudy.svg");
        break;
      case "1114":
        setIcon("/icons/1530370_hail_weather_hailstone_clouds_snow.svg");
        break;
      case "1117":
        setIcon("/icons/1530371_winter_snow_clouds_weather.svg");
        break;
      case "1183":
        setIcon("/icons/1530365_rain_cloud_drizzel_weather.svg");
        break;
      case "1186":
        setIcon("/icons/1530364_rain_storm_shower_weather.svg");
        break;
      case "1189":
        setIcon("/icons/1530364_rain_storm_shower_weather.svg");
        break;
      case "1192":
        setIcon("/icons/1530362_cloudy_weather_forecast_rain_clouds.svg");
        break;
      case "1195":
        setIcon("/icons/1530362_cloudy_weather_forecast_rain_clouds.svg");
        break;
      case "1213":
        setIcon("/icons/1530370_hail_weather_hailstone_clouds_snow.svg");
        break;
      case "1219":
        setIcon("/icons/1530370_hail_weather_hailstone_clouds_snow.svg");
        break;
      case "1225":
        setIcon("/icons/1530371_winter_snow_clouds_weather.svg");
        break;
      case "1240":
        setIcon("/icons/1530364_rain_storm_shower_weather.svg");
        break;
      default:
        setIcon("");
        break;
    }
  }
  console.log(icon);
  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Your Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </form>
      <div className={`card ${cardVisible && "visible"}`}>
        <div className="middle fadeIn">
          <span className="temperature">{weather.current.temp_c}</span>
          <span className="celsius">°C</span>
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
    </div>
  );
}

export default App;
