import { call, put, takeLatest } from "redux-saga/effects";
import types from "./constants";
import { GetWeatherList, GetLocation } from "./services";
import {
  saveWeatherInformation,
  setWeatherError,
  setActualLocation,
} from "./actions";
import { errors } from "../../utils/helper";

function* getWeatherListHandler({ data }) {
  try {
    const list = yield call(GetWeatherList, data);
    yield put(saveWeatherInformation(list));
  } catch (e) {
    if (e.message.includes("401")) {
      yield put(setWeatherError(errors[401]));
    } else if (e.message.includes("404")) {
      yield put(setWeatherError(errors[404]));
    } else {
      yield put(setWeatherError("We have a problem, please try again later."));
    }
  }
}

function* getActualLocationHandler({ data }) {
  try {
    const location = yield call(GetLocation, data);
    yield put(setActualLocation(location.city));
  } catch (e) {
    if (e.message.includes("401")) {
      yield put(setWeatherError(errors[401]));
    } else if (e.message.includes("401")) {
      yield put(setWeatherError(errors[404]));
    } else {
      yield put(setWeatherError("We have a problem, please try again later."));
    }
  }
}

export default function* () {
  yield takeLatest(types.GET_WEATHER_INFORMATION, getWeatherListHandler);
  yield takeLatest(types.GET_ACTUAL_LOCATION, getActualLocationHandler);
}
