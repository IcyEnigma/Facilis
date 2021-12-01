import "./weather.scss";
import { getTheWeather } from "./api/getData";
import React, { useState } from "react";

const Weather = () => {
  const [currReq, setQuery] = useState("");
  const [currVal, setWeather] = useState({});
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await getTheWeather(currReq);
      setWeather(data);
      setQuery("");
    }
  };
  return (
    <div className="weather" id="weather">
      <div className="box-1">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          value={currReq}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
        {currVal.main && (
          <div className="name">
            <h2 className="cnam">
              <span>{currVal.name}</span>
              <sup>{currVal.sys.country}</sup>
            </h2>
            <div className="ctemp">
              {Math.round(currVal.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
              <img
                className="cico"
                src={`https://openweathermap.org/img/wn/${currVal.weather[0].icon}@2x.png`}
                alt={currVal.weather[0].description}
              />
              <p>{currVal.weather[0].description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Weather;
