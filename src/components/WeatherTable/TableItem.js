import React from "react";
import "./WeatherTable.scss";
import propTypes from "prop-types";

const TableItem = ({
  maxTemp,
  minTemp,
  day,
  date,
  description,
  humidity,
  icon,
}) => (
  <div className="table-item">
    <div className="date-container">
      <span>{day}</span>
      <span className="date">{date}</span>
    </div>
    <img src={icon} className="table-item-icon" alt="weather" />
    <div className="temp-container">
      <span className="max-temp">{maxTemp}°</span>
      <span>/{minTemp}</span>
    </div>
    <div className="description">{description}</div>
    <div className="humidity">
      <span>Hum.</span>
      {humidity}%
    </div>
  </div>
);

TableItem.propTypes = {
  maxTemp: propTypes.number.isRequired,
  minTemp: propTypes.number.isRequired,
  day: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  humidity: propTypes.number.isRequired,
  icon: propTypes.string.isRequired,
};

export default TableItem;
