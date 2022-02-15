import StdButton from "./StdButton";
import React from "react";
import renderer from "react-test-renderer";
//import { fireEvent, render } from "@testing-library/react-native";

describe("Standard Text Button", () => {
  it("Should Render", () => {
    const onClickCallback = jest.fn();

    const tree = renderer
      .create(
        <StdButton
          text={"I am a Test"}
          buttonColour={"#9B7FBA"}
          buttonWidth={80}
          buttonHeight={80}
          buttonPress={onClickCallback}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

// describe("Standard Text Button", () => {
//   it("Should Execute Callback", () => {
//     const callbackFn = jest.fn();

//     const { getByText } = render(
//       <StdButton text={"Test Button"} buttonPress={callbackFn} />
//     );

//     fireEvent(getByText("Test Button"));
//     expect(callbackFn).toHaveBeenCalled();
//   });
// });
