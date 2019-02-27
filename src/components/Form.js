import React from 'react';

const Form = props => (
  <div>
    <h1 className="form-container__subtitle"> Start searching </h1>
    <form onSubmit = {props.loadWeatherData}>
      <input type="text" name="city" placeholder="Insert city" />
      <br />
      <input type="text" name="country" placeholder="Country (optional)" />
      <br />
      <button>Get current weather</button>
    </form>
  </div>
);

export default Form;
