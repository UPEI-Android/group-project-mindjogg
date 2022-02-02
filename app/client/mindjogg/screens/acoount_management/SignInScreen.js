import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>
        This is the SignInScreen!
      </Text>
      <Button
        title="Not a member? Sign up!"
        onPress={() => navigation.push("SignUp")} // We added an onPress event which would navigate to the SignUpScreen
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