import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render, fireEvent } from "@testing-library/react-native";

// import the component that we want to test
import EmergencySupportStackNavigator from "../../screens/navigation/EmergencySupportStackNavigator";

// Use this instead with React Native >= 0.64
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Testing react navigation", () => {
  test("Emergency Support Stack Navigation Test", async () => {
    const component = (
      <NavigationContainer>
        <EmergencySupportStackNavigator />
      </NavigationContainer>
    );

    const { findByText } = render(component);

    const header = await findByText("Emergency Support Needed?");
    //const findMoreSupportButton = await findByText("Find More Support");

    expect(header).toBeTruthy();
    //expect(findMoreSupportButton).toBeTruthy();

    //fireEvent.press(findMoreSupportButton, "Find More Support");

    const emergencyListHeader = await findByText("Available Supports Near You");
    // TODO: test clickable list of emergency support
    const learnMoreButton = await findByText("Learn More");
    expect(emergencyListHeader).toBeTruthy();
    fireEvent.press(learnMoreButton, "Learn More");

    const emergencySupportDescriptionHeader = await findByText(
      "UPEI Food Bank"
    );
    expect(emergencySupportDescriptionHeader).toBeTruthy();
  });
});
