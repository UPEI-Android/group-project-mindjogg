import "react-native-gesture-handler";
import { React } from "react";
//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import AccountManagementTabNavigator from "./screens/navigation/AccountManagementTabNavigator";

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="AccountManagement" component={AccountManagementTabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;
