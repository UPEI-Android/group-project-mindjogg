import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render, fireEvent } from "@testing-library/react-native";


// import the component that we want to test
import SmartGoalStackNavigator from "../../screens/navigation/SmartGoalStackNavigator";

// Use this instead with React Native >= 0.64
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Testing react navigation", () => {
    test("Smart Goal Stack Navigation Test", async () => {
        const component = (
            <NavigationContainer>
              <SmartGoalStackNavigator />
            </NavigationContainer>
        );
    
        const { findByText } = render(component);
    
        const header = await findByText("Your Smart Goals");
        const editButton = await findByText("Edit");
    
        expect(header).toBeTruthy();
        expect(editButton).toBeTruthy();
        
        fireEvent.press(editButton, "Edit");
    
        const editPositiveJournalHeader = await findByText("Edit Your Smart Goal");
        expect(editPositiveJournalHeader).toBeTruthy();

    });
});