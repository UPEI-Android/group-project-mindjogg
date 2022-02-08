import StdButton from "./StdButton";
import React from "react";
import renderer from "react-test-renderer";

describe("Standard Text Button", () => {
  it("Should Render", () => {
    const tree = renderer
      .create(
        <StdButton
          text={"I am a Test"}
          buttonColour={"#9B7FBA"}
          buttonWidth={80}
          buttonHeight={80}
          buttonPress={() => console.log("I am a test button")}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
