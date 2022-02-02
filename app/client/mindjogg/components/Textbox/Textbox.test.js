import Textbox from "./Textbox";
import React from "react";
import renderer from "react-test-renderer";

describe("Textbox", () => {
    it("should render", () => {
      const tree = renderer.create(<Textbox />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });