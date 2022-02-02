import { React } from "react";
//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";



import SmartGoalStackNavigator from "./screens/navigation/SmartGoalStackNavigator";

function App() {
  return (
    <NavigationContainer>
      <SmartGoalStackNavigator />
    </NavigationContainer>
  );
}


export default App;
