import React from 'react';

const Form = props => (
  <form onSubmit = {props.loadWeatherData}>
    <input type="text" name="city" placeholder="Insert city" />
    <br />
    <input type="text" name="country" placeholder="Country (optional)" />
    <br />
    <button>Get current weather</button>
  </form>
);

export default Form;
