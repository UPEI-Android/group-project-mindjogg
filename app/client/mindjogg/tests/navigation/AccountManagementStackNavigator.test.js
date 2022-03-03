import React from "react";
//import { NavigationContainer } from "@react-navigation/native";
import { render, fireEvent } from "@testing-library/react-native";

// import the component that we want to test
//import AuthenticationStackNavigator from "../../screens/navigation/AuthenticationStackNavigator";

import SplashScreen from "../../screens/acoount_management/SplashScreen";
// Use this instead with React Native >= 0.64
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Testing react navigation", () => {
  test("Navigate Sing In Page to Sing Up Test", async () => {
    const component = (
      // <NavigationContainer>
      //   <AuthenticationStackNavigator />
      // </NavigationContainer>
      <SplashScreen />
    );

    const { findByText } = render(component);

    const getStarted = await findByText("Get Started");
    // fireEvent.press(getStarted);

    // const signInHeader = await findByText("Please Sign In to Continue");
    // const signUpNavButton = await findByText("Sign up");

    // expect(signInHeader).toBeTruthy();
    // expect(signUpNavButton).toBeTruthy();

    // fireEvent.press(signUpNavButton, "Sign up");

    // const newHeader = await findByText("Create an account to continue");
    // expect(newHeader).toBeTruthy();
  });
});
