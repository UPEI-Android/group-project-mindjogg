import React from "react";
import {View} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Icon from "react-native-vector-icons/Ionicons";

// import PositiveJournalMainScreen, PositiveJournalEditScreen from the positive_journal folder
import PositiveJournalMainScreen from "../positive_journal/PositiveJournalMainScreen";
import PositiveJournalEditScreen from "../positive_journal/PositiveJournalEditScreen";


const Stack = createNativeStackNavigator();

const PositiveJournalStackNavigator = ({navigation}) => {
  return (

    <View style={{ flex: 1 }} collapsable={false}>
    <Stack.Navigator initialRouteName="EmergencySupportMainScreen"
    screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#7d7bb6",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
        <Stack.Screen name="PositiveJournalMainScreen" component={PositiveJournalMainScreen} options = {
          {
            title: "Positive Journal",
            headerLeft: () => (
              <Icon.Button name="menu" size={25} backgroundColor="#7d7bb6" onPress={() => {navigation.openDrawer()}}></Icon.Button>
            )
          }
        }/>
        <Stack.Screen name="PositiveJournalEditScreen" component={PositiveJournalEditScreen} options = {
          {
            title: "Positive Journal Edit",
          }
        }/>
    </Stack.Navigator>
    </View>
  );
}

export default PositiveJournalStackNavigator;