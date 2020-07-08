import types from "./constants";

export const getWeatherInformation = (data) => ({
  type: types.GET_WEATHER_INFORMATION,
  data,
});

export const saveWeatherInformation = (data) => ({
  type: types.SAVE_WEATHER_INFORMATION,
  data,
});

export const setWeatherError = (data) => ({
  type: types.SET_WEATHER_ERROR,
  data,
});

export const getActualLocation = (data) => ({
  type: types.GET_ACTUAL_LOCATION,
  data,
});

export const setActualLocation = (data) => ({
  type: types.SET_ACTUAL_LOCATION,
  data,
});
