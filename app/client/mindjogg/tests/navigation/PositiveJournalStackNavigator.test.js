import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render, fireEvent } from "@testing-library/react-native";


// import the component that we want to test
import PositiveJournalStackNavigator from "../../screens/navigation/PositiveJournalStackNavigator";

// Use this instead with React Native >= 0.64
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Testing react navigation", () => {
    test("Positive Journal Stack Navigation Test", async () => {
        const component = (
            <NavigationContainer>
              <PositiveJournalStackNavigator />
            </NavigationContainer>
        );
    
        const { findByText } = render(component);
    
        const header = await findByText("Your Positive Journals");
        const editButton = await findByText("Edit");
    
        expect(header).toBeTruthy();
        expect(editButton).toBeTruthy();
        
        fireEvent.press(editButton, "Edit");
    
        const editPositiveJournalHeader = await findByText("Edit Positive Journal");
        expect(editPositiveJournalHeader).toBeTruthy();

    });
});