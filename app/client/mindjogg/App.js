import { React } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "@material-ui/icons";
import Button from "./app/components/standard_button";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to MindJogg!</Text>
      <Home></Home>
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
