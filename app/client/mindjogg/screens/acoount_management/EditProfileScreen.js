import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StdButton from "../../components/StdButton/StdButton";


const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text> Edit Profile Screen</Text>
      <StdButton
        text="Cancel"
        buttonPress={() => navigation.goBack()}
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