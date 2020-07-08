import React from "react";
import WeatherList from "containers/WeatherList/index";
import ShallowRender from "react-test-renderer/shallow";
// import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "core/store";

const renderer = new ShallowRender();

describe("render component", () => {
  it("should be render", async () => {
    renderer.render(
      <Provider store={store}>
        <WeatherList />
      </Provider>
    );
    const renderOutput = renderer.getRenderOutput();
    expect(renderOutput).toMatchSnapshot();
  });
});
