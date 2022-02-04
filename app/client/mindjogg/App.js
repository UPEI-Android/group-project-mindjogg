import { React } from "react";
import { StatusBar } from "expo-status-bar";
<<<<<<< HEAD
import { StyleSheet, View, Text } from "react-native";
=======
import { StyleSheet, Text, View } from "react-native";
import { Textbox } from "./components/Textbox";
>>>>>>> b1551b30857b6017348a16783e89ed10f9a917be
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
<<<<<<< HEAD
    <NavigationContainer>
      <PositveJournal />
    </NavigationContainer>
=======
    <View style={styles.container}>
      <Text>Welcome to MindJogg!</Text>
      {/* <Home></Home> this home icon is breaking the app in both android and ios */}
      <StatusBar style="auto" />
      <Textbox />
    </View>
>>>>>>> b1551b30857b6017348a16783e89ed10f9a917be
  );
}

export default App;
