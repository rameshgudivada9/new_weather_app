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
  // console.log("daily",data)
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <Accordion allowZeroExpanded className="daily-item-main-div">
        {data.list.splice(0, 7).map((ele, i) => (
          <AccordionItem key={i} className="full">
            <AccordionItemHeading>
              <AccordionItemButton className="accordoinBTN">
                <div className="daily-item">
                  <div>
                    {" "}
                    <label className="day">{forecastDays[i]}</label>
                  </div>
                  <div>
                    {" "}
                    <label className="min-max">
                      {Math.round(ele.main.temp_max)}°
                      {Math.round(ele.main.temp_min)}°
                    </label>
                  </div>
                  <div>
                    {" "}
                    <img
                      src={`icons/${ele.weather[0].icon}.png`}
                      className="icon-small"
                      alt="weather"
                    />
                  </div>
                  <div className="description">
                    {" "}
                    <label className="description">
                      {ele.weather[0].description}
                    </label>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="">
              <div className="daily-details-grid">
                <div className="sub-item">
                  <label>Pressure</label>
                  <label>{ele.main.pressure}</label>
                </div>
                <div className="sub-item">
                  <label>Humidity</label>
                  <label>{ele.main.humidity}</label>
                </div>
                <div className="sub-item">
                  <label>Clouds</label>
                  <label>{ele.clouds.all}%</label>
                </div>
                <div className="sub-item">
                  <label>Wind speed</label>
                  <label>{ele.wind.speed} m/s</label>
                </div>
                <div className="sub-item">
                  <label>Sea level</label>
                  <label>{ele.main.sea_level}m</label>
                </div>
                <div className="sub-item">
                  <label>Feels like</label>
                  <label>{ele.main.feels_like}°C</label>
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
