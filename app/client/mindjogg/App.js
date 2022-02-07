import "react-native-gesture-handler";
import { React } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import { Textbox } from "./components/Textbox";
// import { Home } from "@material-ui/icons";
import { Provider as PaperProvider } from "react-native-paper";
//import { Text } from "react-native-paper/lib/typescript/components/Avatar/Avatar";

//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

<<<<<<< HEAD
import PositveJournal from "./screens/navigation/PositiveJournalStackNavigator";
import SmartGoalStackNavigator from "./screens/navigation/SmartGoalStackNavigator";
=======
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

>>>>>>> 2fa9c5acd5a02dbc24105740e6bbc2b6c2996953
import AccountManagementTabNavigator from "./screens/navigation/AccountManagementTabNavigator";
import EmergencySupportTabNavigator from "./screens/navigation/EmergencySupportTabNavigator";
import PositiveJournalTabNavigator from "./screens/navigation/PositiveJournalTabNavigator";
import SmartGoalTabNavigator from "./screens/navigation/SmartGoalTabNavigator";

function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <PositveJournal />
=======
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="AccountManagement" component={AccountManagementTabNavigator} />
        <Drawer.Screen name="EmergencySupport" component={EmergencySupportTabNavigator} />
        <Drawer.Screen name="PositiveJournal" component={PositiveJournalTabNavigator} />
        <Drawer.Screen name="SmartGoal" component={SmartGoalTabNavigator} />
      </Drawer.Navigator>
>>>>>>> 2fa9c5acd5a02dbc24105740e6bbc2b6c2996953
    </NavigationContainer>
  );
}

export default App;
