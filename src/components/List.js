import React, { Component } from 'react';

let cities =[];

class List extends Component {

saveCity() {

    if (this.props.city !== undefined || this.props.errorMsg === "") {
      const newData = {
        id: `${this.props.id}`,
        city: `${this.props.city}`,
        country: `${this.props.country}`,
        temperature: `${this.props.temperature}`,
        description: `${this.props.description}`
      };

      cities.push(newData);
      const uniqueCities = [...new Map(cities.map(city => [city.id, city])).values()]

      cities = uniqueCities;
      console.log("output", uniqueCities);
      this.setState({ cities });
      console.log("Cities:" , cities);
      } else {
        console.log("Cannot save: There is an error atm.");
      }
}

  render() {
    return (
      <div>
        <h1 className="form-container__subtitle">Saved cities</h1>
        <button className="list_button" onClick={() =>{ this.saveCity(); }}>
          Save city
        </button>
        <div style={{overflow: 'auto', height: '60vh', display: 'block'}} className="list__title">
          {cities.map(city => <li key={city.id}>{city.city}, {city.country}: <br></br> <div className="list__value"> Temp: {city.temperature} °C ({city.description})</div></li>)}
        </div>
      </div>
    );
  }
}

export default List;
