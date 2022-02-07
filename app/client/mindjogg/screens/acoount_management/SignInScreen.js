import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>
        Please Sign In to Continue
      </Text>
      <Button
        title="Not a member? Sign up"
        onPress={() => navigation.push("SignUp")}
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