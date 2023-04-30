import React, { useEffect, useState } from "react";
import Input from "./Input";
import Card from "./Card";
function App() {
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

  console.log(icon);
  return (
    <div className="main">
      <Input
        setCardVisible={setCardVisible}
        setWeather={setWeather}
        setIcon={setIcon}
      />
      <Card cardVisible={cardVisible} icon={icon} weather={weather} />
    </div>
  );
}

export default App;
