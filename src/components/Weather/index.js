import React from "react";

const Weather = ({ coords, city, country, temp, hum, press }) => {
  const { lat, lon } = coords;

  return (
    <div>
      <span>
        Location: {city} - {country}
      </span>
      <br />
      <div>
        <span>Latitude: {lat} </span>
        <span>Longitude: {lon} </span>
      </div>
      <br />
      <span>Temperature: {temp}</span>
      <br />
      <span>Humidity: {hum}</span>
      <br />
      <span>Pressure: {press}</span>
      <br />
      <span>Condition: {"Not implemented yet"}</span>
    </div>
  );
};

export default Weather;
