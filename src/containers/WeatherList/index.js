import React, { useEffect, useState } from "react";
import "./WeatherList.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  getWeatherInformation,
  getActualLocation,
} from "core/WeatherList/actions";
import WeatherTable from "components/WeatherTable";
// This is the cities information to populate the select button. This information should come from backend but for this demo I put it on this json
import dataJson from "cities.json";

const WeatherList = () => {
  const dispatch = useDispatch();
  const { weatherList, isLoading, weatherError, actualLocation } = useSelector(
    (state) => state.weatherList
  );
  const [data, setData] = useState([]);
  const [valueSelected, setValueSelected] = useState(0);

  useEffect(() => {
    getMyLocation();
  }, []);

  useEffect(() => {
    if (actualLocation) {
      setData([
        {
          id: actualLocation.id,
          name: actualLocation.name,
          coord: {
            lat: actualLocation.coord.lat,
            lon: actualLocation.coord.lon,
          },
        },
        ...dataJson,
      ]);
      dispatch(
        getWeatherInformation({
          lat: actualLocation.coord.lat,
          lon: actualLocation.coord.lon,
        })
      );
    }
  }, [actualLocation, dispatch]);

  const getMyLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) =>
      dispatch(
        getActualLocation({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        })
      )
    );
  };

  const renderValues = () =>
    data.map((v, k) => (
      <option key={v.id} value={k}>
        {v.name}
      </option>
    ));

  const handleSelectCity = (e) => {
    if (e.target.value) {
      setValueSelected(e.target.value);
      dispatch(
        getWeatherInformation({
          lat: data[e.target.value].coord.lat,
          lon: data[e.target.value].coord.lon,
        })
      );
    }
  };

  return (
    <div className="container weather-list-container">
      <h2 className="mb-5">Select a city to see how the weather is there!</h2>
      <div className="input-group mb-3">
        <select
          value={valueSelected}
          className="custom-select"
          onChange={(e) => handleSelectCity(e)}
        >
          <option value="">Choose...</option>
          {renderValues()}
        </select>
      </div>

      {isLoading && (
        <div className="spinner-container">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {weatherList.daily?.length > 0 && !isLoading && (
        <WeatherTable data={weatherList.daily} />
      )}

      {weatherError && <div className="text-danger">{weatherError}</div>}
    </div>
  );
};

export default WeatherList;
