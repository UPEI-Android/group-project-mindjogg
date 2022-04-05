/* REACT IMPORTS */
import { React } from "react";
import { fireEvent, render } from "@testing-library/react-native";
import EmergencySupportMainScreen from "../../../screens/emergency_support/EmergencySupportMainScreen";

describe("Emergency Support Main Screen Tests", () => {
  it("Should render", async () => {
    const screen = <EmergencySupportMainScreen />;

    const { findByText } = render(screen);
    const title1 = await findByText("Immediate Help Needed?");
    const title2 = await findByText("Emergency Support Needed?");
    expect(title1).toBeTruthy();
    expect(title2).toBeTruthy();
  });

  /* it("Should execute Call 911 button callback", async () => {
    const screen = <EmergencySupportMainScreen />;
    //const onClick = jest.fn();

    const { findByTestId } = render(screen);
    const button = await findByTestId("911Btn");
    fireEvent.press(button);

    //expect(Alert.alert).toHaveBeenCalled();
    //expect(onClick).toHaveBeenCalledTimes(1);

    // const alert = getByPlaceholderText("Calling 911 ...");
    // expect(alert).toBeTruthy();
  }); */
});
