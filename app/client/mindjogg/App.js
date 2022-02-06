import { React } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { Home } from "@material-ui/icons";
//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";



import AccountManagementTabNavigator from "./screens/navigation/AccountManagementTabNavigator";

function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to MindJogg!</Text>
      {/* <Home></Home> this home icon is breaking the app in both android and ios */}
      <StatusBar style="auto" />
    </View>
    <NavigationContainer>
      <AccountManagementTabNavigator />
    </NavigationContainer>
  );
}


export default App;
