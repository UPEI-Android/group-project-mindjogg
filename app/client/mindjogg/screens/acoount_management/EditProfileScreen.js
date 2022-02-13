import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import StdButton from "../../components/StdButton/StdButton";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text> Edit Profile Screen</Text>

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