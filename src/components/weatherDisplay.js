// import Bluebird from 'cypress/types/bluebird'
import React from 'react'



   function WeatherDisplay({temperature,condition}){

      const tempStyle = {
        color : temperature > 20 ? 'red' : 'Blue',
      };

   
  return (
    <div>
        <p style={tempStyle}>temperatue : {temperature}°C</p>
      <p>condtions : {condition}</p>
    </div>
  )
}


export default WeatherDisplay