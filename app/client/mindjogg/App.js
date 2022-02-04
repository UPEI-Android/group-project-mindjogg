import { React } from "react";
<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
// import { Home } from "@material-ui/icons";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
//import { Text } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
=======
//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
>>>>>>> fa5c28b524a430eff384baf03b09364e97319e64



import SmartGoalStackNavigator from "./screens/navigation/SmartGoalStackNavigator";

function App() {
  return (
    <NavigationContainer>
      <SmartGoalStackNavigator />
    </NavigationContainer>
  );
}


export default App;
