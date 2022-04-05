/* REACT IMPORTS */
import { React } from "react";
import { render } from "@testing-library/react-native";
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

  
});
