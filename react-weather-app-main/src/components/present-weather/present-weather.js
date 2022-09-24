import React from "react";
import "./present-weather.css";

const CurrentWeather = ({ data}) => {
  console.log(data);
  return (
    <div className="main-weather-div">
      <div className="top">
        <div className="tem-icon-div">
          <p className="temperature">{Math.round(data.main.temp)}°C</p>
          <img
            alt="weather"
            className="weather-icon"
            src={`icons/${data.weather[0].icon}.png`}
          />
        </div>

        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="details">
          <div className="div-row-1">
            <div className="div-row-11">
              <div>
                <span className="div-label">Pressure</span>
              </div>
              <div>
                <span className="div-value">
                  {data.main.pressure} hPa
                </span>
              </div>
            </div>
            <div className="div-row-12">
              <div>
                <span className="div-label">Humidity</span>
              </div>
              <div>
                <span className="div-value">{data.main.humidity}%</span>
              </div>
            </div>
          </div>

          <div className="div-row-2">
            <div className="div-row-12">
              <div>
                <span className="div-label">Feels like</span>
              </div>
              <div>
                <span className="div-value">
                  {Math.round(data.main.feels_like)}°C
                </span>
              </div>
            </div>
            <div className="div-row-12">
              <div>
                <span className="div-label">Wind</span>
              </div>
              <div>
                <span className="div-value">{data.wind.speed} m/s</span>
              </div>
            </div>
          </div>
          <div className="div-row-2">{/* <BarChart /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
