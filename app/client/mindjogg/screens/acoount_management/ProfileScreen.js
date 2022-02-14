import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StdButton from "../../components/StdButton/StdButton";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Profile Screen</Text>

      <StdButton
        text="Edit Profile"
        uppercaseOn={false}
        buttonPress={() => navigation.push("EditProfile")}
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

export default ProfileScreen;