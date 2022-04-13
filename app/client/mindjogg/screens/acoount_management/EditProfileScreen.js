/* REACT IMPORTS */
import { React, useContext } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Avatar, Title, Caption } from "react-native-paper";

/* LOCAL IMPORTS */
import StdButton from "../../components/StdButton/StdButton";
import { globalStyles } from "../../styles/global";
import { AuthContext } from "../../components/conext/authenticationContext";



const ProfileScreen = ({navigation}) => {
  const { signOut } = useContext(AuthContext);

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
          <Title style={styles.title}> {global.userFirstName} </Title>
          <Caption style={styles.username}> @{global.userName} </Caption>
        </View>
    </View>

    <View style={styles.buttonSection}>
    <View style={styles.button}>
    <StdButton
      style={styles.button}
      text="Personal Information"
      uppercaseOn={false}
      buttonPress={() => {navigation.push("PersonalInfomation")}}
    />
    </View>
    <View style={styles.button}>
    <StdButton
      style={styles.button}
      text="Contact Information"
      uppercaseOn={false}
      buttonPress={() => {navigation.push("ContactInformation")}}
    />
    </View>
    <View style={styles.button}>
    <StdButton
      style={styles.button}
      text="Emergency Contacts"
      uppercaseOn={false}
      buttonPress={() => {alert("No emergency contacts") }}
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
    alignItems:"center",
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
    alignItems:"center",
    height: 50,
    width: 50,
    flexDirection: "row", 
    marginTop: height * 0.05,
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