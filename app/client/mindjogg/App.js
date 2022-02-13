import "react-native-gesture-handler";
import { React } from "react";
//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./screens/navigation/DrawerNavigator";

function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}


export default App;