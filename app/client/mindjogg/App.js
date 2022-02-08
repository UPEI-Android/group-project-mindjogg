import "react-native-gesture-handler";
import { React } from "react";
//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import AccountManagementTabNavigator from "./screens/navigation/AccountManagementTabNavigator";
import EmergencySupportTabNavigator from "./screens/navigation/EmergencySupportTabNavigator";
import PositiveJournalTabNavigator from "./screens/navigation/PositiveJournalTabNavigator";
import SmartGoalTabNavigator from "./screens/navigation/SmartGoalTabNavigator";

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="AccountManagement" component={AccountManagementTabNavigator} />
        <Drawer.Screen name="EmergencySupport" component={EmergencySupportTabNavigator} />
        <Drawer.Screen name="PositiveJournal" component={PositiveJournalTabNavigator} />
        <Drawer.Screen name="SmartGoal" component={SmartGoalTabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;