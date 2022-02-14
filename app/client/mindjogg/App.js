import "react-native-gesture-handler";
import { React } from "react";
//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

//import DrawerNavigator from "./screens/navigation/DrawerNavigator";
import AuthenticationStackNavigator from "./screens/navigation/AuthenticationStackNavigator";

function App() {
  return (
    <NavigationContainer>
      <AuthenticationStackNavigator />
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
}


export default App;