import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WeatherList from "./WeatherList";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={WeatherList} />
      </Switch>
    </Router>
  );
}
