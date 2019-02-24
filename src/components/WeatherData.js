import React from 'react';

const WeatherData = props => (
	<div className="weather__info">
	 {
	 	props.city && props.country && <p className="weather__key"> Location:
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p>
	 }
	 {
	 	props.temperature && <p className="weather__key"> Temperature:
	 		<span className="weather__value"> { props.temperature }	°C</span>
	 	</p>
	 }
	 {
	 	props.humidity && <p className="weather__key"> Humidity:
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p>
	 }
	 {
	 	props.description && <p className="weather__key"> Conditions:
	 		<span className="weather__value"> { props.description } </span>
	 </p>
	 }
	 {
	 	props.errorMsg && <p className="weather__error">{ props.errorMsg }</p>
	 }
	</div>
);

/*
<div>
  {props.city && props.country && props.temperature && props.description &&
    <p> The current temperature in {props.city}, {props.country} is {props.temperature} °C with {props.description}. </p>
  }
  {props.errorMsg && <p>{props.errorMsg}</p>}
</div>
*/

export default WeatherData;
