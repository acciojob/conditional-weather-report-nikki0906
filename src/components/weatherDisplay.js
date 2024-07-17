import React from "react"

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;
  const tempStyle = {
    color: temperature > 20 ? 'red' : 'blue'
  };

  return (
    <div>
      <p style={tempStyle}>Temperature: {temperature}</p>
      <span>Conditions: {conditions}</span>
    </div>
  );
};

export default WeatherDisplay;