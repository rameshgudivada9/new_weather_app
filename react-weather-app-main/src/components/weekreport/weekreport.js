import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./weekreport.css";

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <Accordion allowZeroExpanded className="daily-item-main-div">
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx} className="full">
            <AccordionItemHeading>
              <AccordionItemButton className="accordoinBTN">
                <div className="daily-item">
                  <div>
                    {" "}
                    <label className="day">{forecastDays[idx]}</label>
                  </div>
                  <div>
                    {" "}
                    <label className="min-max">
                      {Math.round(item.main.temp_max)}°
                      {Math.round(item.main.temp_min)}°
                    </label>
                  </div>
                  <div>
                    {" "}
                    <img
                      src={`icons/${item.weather[0].icon}.png`}
                      className="icon-small"
                      alt="weather"
                    />
                  </div>
                  <div className="description">
                    {" "}
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="">
              <div className="daily-details-grid">
                <div className="sub-item">
                  <label>Pressure</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="sub-item">
                  <label>Humidity</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="sub-item">
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="sub-item">
                  <label>Wind speed</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="sub-item">
                  <label>Sea level</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="sub-item">
                  <label>Feels like</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
