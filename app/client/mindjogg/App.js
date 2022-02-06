import { React } from "react";
//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";



import AccountManagementTabNavigator from "./screens/navigation/AccountManagementTabNavigator";

function App() {
  return (
    <NavigationContainer>
      <AccountManagementTabNavigator />
    </NavigationContainer>
  );
}


export default App;
