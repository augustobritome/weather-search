import React from "react";

const Form = ({ onButtonSubmit, onCityChange, onCountryChange }) => {
  return (
    <form onSubmit={onButtonSubmit}>
      <input
        onChange={onCityChange}
        type="text"
        name="city"
        placeholder="City..."
      />
      <input
        onChange={onCountryChange}
        type="text"
        name="country"
        placeholder="Country..."
      />
      <button>Get Weather</button>
    </form>
  );
};

export default Form;
