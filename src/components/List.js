import React, { Component } from 'react';

class List extends Component {
  render() {

    const cities =[
    { id: '1', city: 'Turu1', country: 'fi' },
    { id: '2', city: 'Turu2', country: '' },
    { id: '3', city: 'Turu3', country: 'UK' },
    { id: '4', city: 'Turu4', country: 'finland' },
    { id: '5', city: 'Turu5', country: '' },
    { id: '6', city: 'Turu6', country: '' },
    ];

    return (
      <ul>
        {cities.map(city => <li key={city.id}>{city.id} {city.city} {city.country}</li>)}
      </ul>
    );
  }
}

export default List;
