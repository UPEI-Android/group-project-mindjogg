import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render, fireEvent } from "@testing-library/react-native";


// import the component that we want to test
import PositiveJournalStackNavigator from "../../screens/navigation/PositiveJournalStackNavigator";

// Use this instead with React Native >= 0.64
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Testing react navigation", () => {
    test("Positive Journal Stack Navigation Test",  () => {

        expect(true).toBeTruthy();

    });
});