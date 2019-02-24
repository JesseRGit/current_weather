import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form onSubmit = {this.props.loadWeatherData}>
        <input type="text" name="city" placeholder="tampere" />
        <button>Get current weather</button>
      </form>
    )
  }
}

export default Form;
