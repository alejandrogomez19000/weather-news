import React from "react";
import App from "App";
import ShallowRender from "react-test-renderer/shallow";

const renderer = new ShallowRender();

describe("render app", () => {
  it("should be render", async () => {
    renderer.render(<App />);
    const renderOutput = renderer.getRenderOutput();
    expect(renderOutput).toMatchSnapshot();
  });
});
