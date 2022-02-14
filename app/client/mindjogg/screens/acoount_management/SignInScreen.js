import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StdButton from "../../components/StdButton/StdButton";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Please Sign In to Continue</Text>

      <Text>Not a Member? Sign Up</Text>

      <StdButton
        text="Sign Up"
        uppercaseOn={false}
        buttonPress={() => navigation.push("SignUpScreen")}
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
