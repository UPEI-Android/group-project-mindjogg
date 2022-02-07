import React from "react";
import {View} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Icon from "react-native-vector-icons/Ionicons";

// import EmergencySupportMainScreen, EmergencySupportListScreen, EmergencySupportDescriptionScreen from the emergency_support folder
import EmergencySupportMainScreen from "../emergency_support/EmergencySupportMainScreen";
import EmergencySupportListScreen from "../emergency_support/EmergencySupportListScreen";
import EmergencySupportDescriptionScreen from "../emergency_support/EmergencySupportDescriptionScreen";


const Stack = createNativeStackNavigator();

const EmergencySupportStackNavigator = ({navigation}) => {
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
        <Stack.Screen name="EmergencySupportMainScreen" component={EmergencySupportMainScreen} options = {
          {
            title: "Emergency Support",
            headerLeft: () => (
              <Icon.Button name="menu" size={25} backgroundColor="#7d7bb6" onPress={() => {navigation.openDrawer()}}></Icon.Button>
            )
          }
        }/>
        <Stack.Screen name="EmergencySupportListScreen" component={EmergencySupportListScreen} options = {
          {
            title: "Emergency Support List",
          }
        }/>
        <Stack.Screen name="EmergencySupportDescriptionScreen" component={EmergencySupportDescriptionScreen} options = {
          {
            title: "Emergency Support Description",
          }
        } />
    </Stack.Navigator>
    </View>
  );
}

export default EmergencySupportStackNavigator;