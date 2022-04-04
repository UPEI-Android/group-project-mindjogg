import React from "react";
import {View} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Icon from "react-native-vector-icons/Ionicons";

// import SmartGoalMainScreen, SmartGoalEditScreen from the smart_goals folder
import SmartGoalMainScreen from "../smart_goals/SmartGoalMainScreen";
import SmartGoalEditScreen from "../smart_goals/SmartGoalEditScreen";
import SmartGoalDetailScreen from "../smart_goals/SmartGoalDetailScreen";
import { globalStyles } from "../../styles/global";

const Stack = createNativeStackNavigator();

const SmartGoalStackNavigator = ({navigation}) => {
  return (

    <View style={{ flex: 1 }} collapsable={false}>
    <Stack.Navigator initialRouteName="EmergencySupportMainScreen"
    screenOptions={{
        headerTitleAlign: "center",
        headerStyle:[ globalStyles.purpleBackground],
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
        <Stack.Screen name="SmartGoalMainScreen" component={SmartGoalMainScreen} options = {
          {
            title: "Smart Goals",
            headerLeft: () => (
              <Icon.Button name="menu" size={25} style={globalStyles.purpleBackground} onPress={() => {navigation.openDrawer()}}></Icon.Button>
            )
          }
        }/>
        <Stack.Screen name="SmartGoalEditScreen" component={SmartGoalEditScreen} options = {
          {
            title: "Smart Goal Edit",
          }
        }/>
          <Stack.Screen name="SmartGoalDetailScreen" component={SmartGoalDetailScreen} options = {
          {
            title: "Smart Goal Edit",
          }
        }/>
    </Stack.Navigator>
    </View>
  );
}

export default SmartGoalStackNavigator;