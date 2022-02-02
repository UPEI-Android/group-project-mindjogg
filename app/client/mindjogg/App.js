import { React } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer"
// import { Home } from "@material-ui/icons";

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

import AccountManagementStackNavigator from "./screens/navigation/AccountManagementStackNavigator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }, 
});

function App() {
  return (
    <NavigationContainer>
      <AccountManagementStackNavigator />
    </NavigationContainer>
  );
}

// function HomeScreen() {
//    return (
//     <View style={styles.container}>
//       <Text>Welcome to MindJogg!</Text>
//       {/* <Home></Home> this home icon is breaking the app in both android and ios */}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default App;
