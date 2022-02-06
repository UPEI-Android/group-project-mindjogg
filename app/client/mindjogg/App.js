import { React } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Textbox } from "./components/Textbox";
// import { Home } from "@material-ui/icons";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
//import { Text } from "react-native-paper/lib/typescript/components/Avatar/Avatar";

//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import PositveJournal from "./screens/navigation/PositiveJournalStackNavigator";
import SmartGoalStackNavigator from "./screens/navigation/SmartGoalStackNavigator";
import AccountManagementTabNavigator from "./screens/navigation/AccountManagementTabNavigator";

function App() {
  return (
    <NavigationContainer>
      <PositveJournal />

      <AccountManagementTabNavigator />
    </NavigationContainer>
  );
}

export default App;
