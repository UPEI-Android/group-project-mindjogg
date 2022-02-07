import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render, fireEvent } from "@testing-library/react-native";


// import the component that we want to test
import AccountManagementStackNavigator from "../../screens/navigation/AccountManagementStackNavigator";

// Use this instead with React Native >= 0.64
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Testing react navigation", () => {
    test("Navigate Sing In Page to Sing Up Test", async () => {
      const component = (
        <NavigationContainer>
          <AccountManagementStackNavigator />
        </NavigationContainer>
      );
  
      const { findByText } = render(component);
  
      const header = await findByText("Please Sign In to Continue");
      const signUpNavButton = await findByText("Not a member? Sign up");
  
      expect(header).toBeTruthy();
      expect(signUpNavButton).toBeTruthy();
      
        fireEvent.press(signUpNavButton, "Not a member? Sign up");

        const newHeader = await findByText("Let's Get Started");
        expect(newHeader).toBeTruthy();
    });
});


