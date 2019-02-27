import React, { Component } from 'react';

let cities =[ { id: '1', city: 'Turu1', country: 'fi' },
    { id: '2', city: 'Turu2', country: '' },
    { id: '3', city: 'Turu3', country: 'UK' },
    { id: '4', city: 'Turu4', country: 'finland' },
    { id: '5', city: 'Turu5', country: '' },
    { id: '6', city: 'Turu6', country: '' },
    { id: '7', city: 'Turu7', country: '' },
    { id: '8', city: 'Turu8', country: '' },
    { id: '9', city: 'Turu9', country: '' },
    { id: '10', city: 'Turu10', country: '' },
    { id: '11', city: 'Turu11', country: '' },
    { id: '12', city: 'Turu12', country: '' }, ]

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
      }
      else {
        console.log("Cannot save: There is an error atm.");
      }
}

  render() {
    return (
      <div>
        <button className="list_button" onClick={() =>{ this.saveCity(); }}>
          Save city
        </button>
        <list className="list__title">
          {cities.map(city => <li key={city.id}>{city.city}, {city.country}: <br></br> <div className="list__value"> Temp: {city.temperature} °C ({city.description})</div></li>)}
        </list>
      </div>
    );
  }
}

export default List;
