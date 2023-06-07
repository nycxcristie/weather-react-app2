import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${props.city} is ${Math.round(response.data.main.temp)}°C`
    );
  }
  let apiKey = `f3887e262c88d1158f7e2ef4998e234c`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Sunny">
      <h2>Hello from Weather</h2>
      <br />
      <a href="https://www.shecodes.io">SheCodes link</a>
    </div>
  );
}
