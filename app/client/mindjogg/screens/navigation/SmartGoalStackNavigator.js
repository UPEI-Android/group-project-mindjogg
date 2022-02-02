import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import SmartGoalMainScreen, SmartGoalEditScreen from the smart_goals folder
import SmartGoalMainScreen from "../smart_goals/SmartGoalMainScreen";
import SmartGoalEditScreen from "../smart_goals/SmartGoalEditScreen";


const Stack = createNativeStackNavigator();

const SmartGoalStackNavigator = () => {
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
        <Stack.Screen name="SmartGoalMainScreen" component={SmartGoalMainScreen} />
        <Stack.Screen name="SmartGoalEditScreen" component={SmartGoalEditScreen} />
    </Stack.Navigator>
  );
}

export default SmartGoalStackNavigator;