import types from "./constants";

const initialState = {
  isLoading: false,
  weatherList: [],
  weatherError: false,
  actualLocation: null,
  actualCity: null,
};

export default (state = initialState, { data, type }) => {
  switch (type) {
    case types.GET_WEATHER_INFORMATION:
      return {
        ...state,
        isLoading: true,
      };
    case types.SAVE_WEATHER_INFORMATION:
      return {
        ...state,
        isLoading: false,
        weatherList: data,
        weatherError: null,
      };
    case types.SET_WEATHER_ERROR:
      return {
        ...state,
        isLoading: false,
        weatherError: data,
      };
    case types.GET_ACTUAL_LOCATION:
      return {
        ...state,
        isLoading: true,
      };
    case types.SET_ACTUAL_LOCATION:
      return {
        ...state,
        isLoading: false,
        actualLocation: data,
      };
    default:
      return state;
  }
};
