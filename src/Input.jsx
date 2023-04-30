import { useState } from "react";

function Input({ setCardVisible, setWeather, setIcon }) {
  const [location, setLocation] = useState("");
  function setIconPath(code, isday) {
    switch (String(code)) {
      case "1000":
        isday === 1
          ? setIcon("/icons/1530392_weather_sun_sunny_temperature.svg")
          : setIcon("/icons/1530382_weather_night_moon_moonlight.svg");
        break;
      case "1003":
        isday === 1
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
        setIconPath(data.current.condition.code, data.current.is_day);
      })
      .catch((error) => console.log(error));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Your Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </form>
  );
}

export default Input;
