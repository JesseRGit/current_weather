import React from 'react';

const WeatherData = props => (
	<div>
	 { props.city && props.country &&
		 <p
		 	className="weather__key">{props.city}, {props.country}
		 </p>
	 }
	 {
		 props.temperature && props.description &&
		 <span
		 	className="weather__value"> Current temperature is {props.temperature} °C with {props.description}.
		 </span>
	 }
	 {
	  props.errorMsg && <p className="weather__error">{ props.errorMsg }</p>
	 }
	</div>
);

export default WeatherData;
