import React from 'react';

const WeatherData = (props) => {
    return(
      <div>
        {props.city && <p>The current temperature in {props.city}, {props.country} is {props.temperature} °C with {props.description}.</p>}
        {props.errorMsg && <p>{props.errorMsg}</p>}
      </div>
    )
}

export default WeatherData;
