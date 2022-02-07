import PasswordBox from "./PasswordBox";
import React from "react";
import renderer from "react-test-renderer";

describe("Textbox", () => {
    it("should render", () => {
      const tree = renderer.create(<PasswordBox />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});