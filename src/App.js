import React, { Component } from 'react';
//import './App.css';
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
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    e.preventDefault();
    let fetchedData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`);;
    let weatherData = await fetchedData.json();

    console.log("Cod value: ", weatherData.cod);

    // Handling expectional scenarios: search with city + country and failure scenarios
    if (city && country && weatherData.cod == "200") {

      fetchedData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${API_KEY}`);;
      weatherData = await fetchedData.json();

      if (weatherData.cod != "200") {
        fetchedData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`);;
        weatherData = await fetchedData.json();
        this.setState({
            temperature: weatherData.main.temp,
            city: weatherData.name,
            country: weatherData.sys.country,
            description: weatherData.weather[0].description,
            errorMsg: "City found but from different country: " + `${weatherData.sys.country}`
          })
          return;
      }
      console.log("City with country found, with data:", weatherData)
    }
    else if (city && weatherData.cod == "200") {
      console.log("City found, with data:", weatherData)
    }
    else if (weatherData.cod == "404") {
      this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          description: undefined,
          errorMsg: "No city found with that name, please try again."
        })
        return;
    } else {
      this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          description: undefined,
          errorMsg: "Seach failed."
        })
      return;
    }

    // State gets set if no execptional scenarios are found
    console.log("Setting state");
    this.setState({
        temperature: weatherData.main.temp,
        city: weatherData.name,
        country: weatherData.sys.country,
        description: weatherData.weather[0].description,
        errorMsg: ""
    })
  }

  render() {
    return (
      <div>
        <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
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
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
