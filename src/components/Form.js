import React from 'react';

const Form = props => (
  <form onSubmit = {props.loadWeatherData}>
    <input type="text" name="city" placeholder="Enter city..." />
    <button>Get current weather</button>
  </form>
);

export default Form;
