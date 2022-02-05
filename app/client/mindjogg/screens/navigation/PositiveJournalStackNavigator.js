import React from "react";
import {View} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import PositiveJournalMainScreen, PositiveJournalEditScreen from the positive_journal folder
import PositiveJournalMainScreen from "../positive_journal/PositiveJournalMainScreen";
import PositiveJournalEditScreen from "../positive_journal/PositiveJournalEditScreen";


const Stack = createNativeStackNavigator();

const PositiveJournalStackNavigator = () => {
  return (

    <View style={{ flex: 1 }} collapsable={false}>
    <Stack.Navigator initialRouteName="EmergencySupportMainScreen"
    screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
        <Stack.Screen name="PositiveJournalMainScreen" component={PositiveJournalMainScreen} />
        <Stack.Screen name="PositiveJournalEditScreen" component={PositiveJournalEditScreen} />
    </Stack.Navigator>
    </View>
  );
}

export default PositiveJournalStackNavigator;