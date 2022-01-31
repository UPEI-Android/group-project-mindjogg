import { React } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Textbox } from "./components/Textbox";
// import { Home } from "@material-ui/icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to MindJogg!</Text>
      {/* <Home></Home> this home icon is breaking the app in both android and ios */}
      <StatusBar style="auto" />
      <Textbox />
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
