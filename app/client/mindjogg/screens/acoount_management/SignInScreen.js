import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StdButton from "../../components/StdButton/StdButton";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the SignInScreen!</Text>

      <StdButton
        // text={"Not a member? Sign up!"}
        // buttonColour={"#9B7FBA"}
        buttonPress={() => navigation.push("SignUp")}
        //buttonHeight={120}
        //buttonWidth={150}
        //buttonLongPress={() => {}}
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
