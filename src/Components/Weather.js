import React, { useEffect, useState } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1742a17b38ac8a12e8203216868579a7`
        )
        .then((response) => response.json())
        .then((data) => {
          const temperatureCelsius = data.main.temp - 273.15;
          setWeather({ ...data, main: { ...data.main, temp: temperatureCelsius }});
        });
        
      });
    }
  },[]);

  return (
    <div>
        {
            weather ? (
                <div>
                <h2>Current Weather</h2>
                <p>Temperature: {weather.main && weather.main.temp.toFixed(2)}°C</p>
                <p>Condition: {weather.weather && weather.weather[0].description}</p>
                </div>
            ) : (
            <p>
            Loading ...
            </p> 
            )
        }
    </div>
  )
}
