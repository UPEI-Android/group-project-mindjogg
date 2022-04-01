import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StdButton from "../../components/StdButton/StdButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DialogBox from "../../components/DialogBox/DialogBox";

let userFirstName;
let userName;
//function to set value of user
const setUserValue = async () => {
  userFirstName = await AsyncStorage.getItem("userFirstName");
  userFirstName = userFirstName.replace(/['"]+/g, "");
  userName = await AsyncStorage.getItem("userName");
  userName = userName.replace(/['"]+/g, "");

  return;
};

const ProfileScreen = ({ navigation }) => {
  setUserValue();
  return (
    <View style={styles.center}>
      <Text style={{ fontSize: 50 }}> Hello {userFirstName}!</Text>
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
