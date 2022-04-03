/* REACT IMPORTS */
import { React, useContext } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Avatar, Title, Caption } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

/* LOCAL IMPORTS */
import StdButton from "../../components/StdButton/StdButton";
import { globalStyles } from "../../styles/global";
import { AuthContext } from "../../components/conext/authenticationContext";

let userFirstName;
let userName;
//function to set value of user
const setUserValue= async () => {
  userFirstName= await AsyncStorage.getItem("userFirstName");
  userFirstName=userFirstName.replace(/['"]+/g, "");
  userName= await AsyncStorage.getItem("userName");
  userName=userName.replace(/['"]+/g, "");

  return;
}

const ProfileScreen = ({navigation}) => {
  const { signOut } = useContext(AuthContext);
  setUserValue();

  return (
    <View style={[styles.container, globalStyles.pinkBackground]}>

    <View style={styles.userInfoSection}>
      <View style={styles.avatarStyle}>
        <Avatar.Image
          source={{
            uri: "https://images.saymedia-content.com/.image/t_share/MTc2NDU3MDE0NzExNjkwNDUz/about-steve-jobs.jpg",
          }}
            size={70}
        />
      </View>
      <View style={styles.userInfo}>
          <Title style={styles.title}> {userFirstName} </Title>
          <Caption style={styles.username}> @{userName} </Caption>
        </View>
    </View>

    <View style={styles.buttonSection}>
    <View style={styles.button}>
    <StdButton
      style={styles.button}
      text="Personal Information"
      uppercaseOn={false}
      buttonPress={() => {navigation.push("ProfileScreen")}}
    />
    </View>
    <View style={styles.button}>
    <StdButton
      style={styles.button}
      text="Contact Information"
      uppercaseOn={false}
      buttonPress={() => {}}
    />
    </View>
    <View style={styles.button}>
    <StdButton
      style={styles.button}
      text="Emergency Contacts"
      uppercaseOn={false}
      buttonPress={() => {}}
    />
    </View>
    <View style={styles.button}>
    <StdButton
      style={styles.button}
      text="Update Password"
      uppercaseOn={false}
      buttonPress={() => {navigation.push("ForgotPasswordScreen")}}
    />
    </View>
    <View style={styles.button}>
      <StdButton
        text="Logout"
        uppercaseOn={false}
        buttonPress={() => {signOut()}}
    />
    </View>
    </View>
    </View>
  );
};

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingBottom: 25,
  },
  userInfo: {
    flexDirection: "column",
    marginTop: height * 0.01,
    paddingLeft: 20,
  },
  avatarStyle: {
    height: 50,
    width: 50,
    flexDirection: "row", 
    marginTop: height * 0.01,
  },
  buttonSection: {
    paddingLeft: 20,
  },
  button: {
    margin: 5,
    borderRadius: 30,
  },
  title: {
    fontSize: 20,
    marginTop: 3,
    fontWeight: "bold",
  },
  username: {
    fontSize: 16,
    lineHeight: 16,
  },
});

export default ProfileScreen;