import { React } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
// import { Home } from "@material-ui/icons";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
//import { Text } from "react-native-paper/lib/typescript/components/Avatar/Avatar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to MindJogg!</Text>
      {/* <Home></Home> this home icon is breaking the app in both android and ios */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
