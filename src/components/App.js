
import React, { useEffect,useState} from "react";
import './../styles/App.css';
import WeatherDisplay from "./weatherDisplay.js";


function App() {
  const [weather, setWeather] = useState({ temperature: 0, conditions: '' });

  useEffect(() => {
    // Simulate fetching weather data
    const fetchWeather = () => {
      const weatherData = { temperature: 25, conditions: 'Sunny' };
      setWeather(weatherData);
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <h1>Weather Application</h1>
      <WeatherDisplay temperature={weather.temperature} conditions={weather.conditions} />
      
    </div>
  );
}
export default App