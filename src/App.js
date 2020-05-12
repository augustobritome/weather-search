import React, { useState } from 'react';

import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import { useEffect } from 'react';

require('dotenv').config();

console.log(process.env);

const API_KEY = process.env.API_KEY;

function App() {
  const [coords, setCoords] = useState({});
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  //const [condition, setCondition] = useState("");
  const [error, setError] = useState('');

  const setData = ({ coord, main }) => {
    const { temp, pressure, humidity } = main;
    setCoords(coord);
    setHumidity(humidity);
    setPressure(pressure);
    setTemp(temp);
    // setCondition(cond);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      console.log(data);
      setData(data);
      setError(null);
    } catch (err) {
      setError(err);
      console.log('Error: ', err);
    }
  };

  return (
    <div>
      <Title />
      <Form
        onButtonSubmit={handleSubmit}
        onCityChange={(e) => {
          setCity(e.target.value);
        }}
        onCountryChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <Weather
        coords={coords}
        city={city}
        country={country}
        temp={temp}
        hum={humidity}
        press={pressure}
        //cond={condition}
      />
    </div>
  );
}

export default App;
