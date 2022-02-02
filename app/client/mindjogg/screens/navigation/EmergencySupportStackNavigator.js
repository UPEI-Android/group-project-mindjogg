import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import EmergencySupportMainScreen, EmergencySupportListScreen, EmergencySupportDescriptionScreen from the emergency_support folder
import EmergencySupportMainScreen from "../emergency_support/EmergencySupportMainScreen";
import EmergencySupportListScreen from "../emergency_support/EmergencySupportListScreen";
import EmergencySupportDescriptionScreen from "../emergency_support/EmergencySupportDescriptionScreen";


const Stack = createNativeStackNavigator();

const EmergencySupportStackNavigator = () => {
  return (

    <Stack.Navigator initialRouteName="EmergencySupportMainScreen"
    screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
        <Stack.Screen name="EmergencySupportMainScreen" component={EmergencySupportMainScreen} />
        <Stack.Screen name="EmergencySupportListScreen" component={EmergencySupportListScreen} />
        <Stack.Screen name="EmergencySupportDescriptionScreen" component={EmergencySupportDescriptionScreen} />
    </Stack.Navigator>
  );
}

export default EmergencySupportStackNavigator;