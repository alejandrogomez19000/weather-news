import { all, fork } from "redux-saga/effects";
import WeatherList from "./WeatherList/sagas";

export default function* () {
  yield all([fork(WeatherList)]);
}
