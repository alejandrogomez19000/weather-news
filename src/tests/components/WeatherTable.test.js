import React from "react";
import WeatherTable from "components/WeatherTable";
import ShallowRender from "react-test-renderer/shallow";
import { Provider } from "react-redux";
import store from "core/store";

const renderer = new ShallowRender();

const data = [
  {
    weather: [
      {
        description: "some desc",
        icon: "some icon",
      },
    ],
    temp: {
      max: 10,
      min: 5,
    },
    dt: "159258924248",
    humidity: 23,
  },
];

describe("render component", () => {
  it("should be render", async () => {
    renderer.render(
      <Provider store={store}>
        <WeatherTable data={data} />
      </Provider>
    );
    const renderOutput = renderer.getRenderOutput();
    expect(renderOutput).toMatchSnapshot();
  });
});
