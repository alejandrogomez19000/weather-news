import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const GetWeatherList = (params) =>
  axios
    .get(
      `${API_URL}/onecall?lat=${params.lat}&lon=${params.lon}&exclude=current,minutely,hourly&appid=${API_KEY}&units=metric`
    )
    .then(({ data }) => data);

export const GetLocation = (params) =>
  axios
    .get(
      `${API_URL}/forecast?lat=${params.lat}&lon=${params.lon}&cnt=5&appid=${API_KEY}&units=metric`
    )
    .then(({ data }) => data);
