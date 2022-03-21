/* REACT IMPORTS */
import { React, useContext } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Avatar, Title, Caption } from "react-native-paper";

/* LOCAL IMPORTS */
import StdButton from "../../components/StdButton/StdButton";
import { globalStyles } from "../../styles/global";
import { AuthContext } from "../../components/conext/authenticationContext";

const ProfileScreen = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);

  const signOutHandler = () => { 
    signOut();
  }

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
        <View style={styles.userInfo}>
          <Title style={styles.name}>Steve Jobs</Title>
          <Caption style={styles.username}>@stevejobs</Caption>
        </View>
      </View>
    </View>

    <View style={styles.buttonSection}>
    <View style={styles.button}>
    <StdButton
      style={styles.button}
      text="Personal Information"
      uppercaseOn={false}
      buttonPress={() => {}}
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
      buttonPress={() => {}}
    />
    </View>
    <View style={styles.button}>
      <StdButton
        text="Logout"
        uppercaseOn={false}
        buttonPress={() => {signOutHandler()}}
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
  },
  userInfo: {
    flexDirection: "column",
    marginTop: height * 0.01,
    paddingLeft: 10,
  },
  avatarStyle: {
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
  name: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  username: {
    fontSize: 14,
    lineHeight: 14,
  },
});

export default ProfileScreen;