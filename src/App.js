import React, { Component } from 'react';
import './App.css';

import Title from '../src/components/Title';
import Form from '../src/components/Form';
import WeatherData from '../src/components/WeatherData';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    errorMsg: undefined
  }

  getWeatherData = async (e) => {
    const city = e.target.elements.city.value;

    e.preventDefault();
    const fetchedData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`);
    const weatherData = await fetchedData.json();
    console.log("Data: ", weatherData);

    if (city  && weatherData.cod !== "404" && weatherData.cod !== "400") {
      this.setState({
        temperature: weatherData.main.temp,
        city: weatherData.name,
        country: weatherData.sys.country,
        description: weatherData.weather[0].description,
        errorMsg: ""
      })
    } else if (weatherData.cod === "404") {
        this.setState({
          temperature: "", city: "", country: "", description: "",
          errorMsg: "No cities found by that name."
      })
    } else {
      this.setState({
        temperature: "", city: "", country: "", description: "",
        errorMsg: "Please type in a city."
    })}

  }

  render() {
    return (
      <div>
        <Title />
        <Form loadWeatherData={this.getWeatherData} />
        <WeatherData
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          errorMsg={this.state.errorMsg}
        />
      </div>
    );
  }
}

export default App;
