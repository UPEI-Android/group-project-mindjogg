import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StdButton from "../../components/StdButton/StdButton";
import { globalStyles } from "../../styles/global";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={[styles.center,globalStyles.pinkBackground]}>
      <Text>Please Sign In to Continue</Text>

      <Text>Not a Member? Sign Up</Text>

      <StdButton
        text="Sign in"
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
