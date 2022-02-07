import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import StdButton from "../../components/StdButton/StdButton";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the SignInScreen!</Text>

      <StdButton
      // text={"Not a member? Sign up!"}
      // buttonColour={"#9B7FBA"}
      // buttonPress={() => navigation.push("SignUp")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default SignInScreen;
