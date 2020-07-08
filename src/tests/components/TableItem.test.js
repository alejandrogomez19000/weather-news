import React from "react";
import TableItem from "components/WeatherTable/TableItem";
import ShallowRender from "react-test-renderer/shallow";

const renderer = new ShallowRender();

const tableProps = {
  maxTemp: 20,
  minTemp: 15,
  day: "some day",
  date: "some date",
  description: "some description",
  humidity: 80,
  icon: "some icon",
};

describe("render component", () => {
  it("should be render", async () => {
    renderer.render(<TableItem {...tableProps} />);
    const renderOutput = renderer.getRenderOutput();
    expect(renderOutput).toMatchSnapshot();
  });
});
