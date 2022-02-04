import { React } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
// import { Home } from "@material-ui/icons";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
//import { Text } from "react-native-paper/lib/typescript/components/Avatar/Avatar";

//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import PositveJournal from "./screens/navigation/PositiveJournalStackNavigator";
import SmartGoalStackNavigator from "./screens/navigation/SmartGoalStackNavigator";

function App() {
  return (
    <NavigationContainer>
      <PositveJournal />
    </NavigationContainer>
  );
}

export default App;
