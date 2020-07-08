import React from "react";
import propTypes from "prop-types";
import "./WeatherTable.scss";
import TableItem from "./TableItem";
import { parseUnixDate, getDay, weekDays } from "utils/helper";
import { v4 as uuidv4 } from "uuid";

const WeatherTable = ({ data }) => {
  const renderTable = () =>
    data?.map((v, k) => {
      if (k < 5) {
        const { max, min } = data[k].temp;
        const { icon, description } = data[k].weather[0];
        return (
          <TableItem
            key={uuidv4()}
            day={weekDays[getDay(v.dt)]}
            date={parseUnixDate(v.dt)}
            maxTemp={Math.round(max * 10) / 10}
            minTemp={Math.round(min * 10) / 10}
            description={description}
            humidity={data[k].humidity}
            icon={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          />
        );
      }
    });

  return (
    <div className="tab-content">
      <div className="weather-content">
        <ul className="content-list">{renderTable()}</ul>
      </div>
    </div>
  );
};

WeatherTable.propTypes = {
  data: propTypes.arrayOf(propTypes.any).isRequired,
};

export default WeatherTable;
