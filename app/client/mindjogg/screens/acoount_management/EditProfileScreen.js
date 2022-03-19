import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import StdButton from "../../components/StdButton/StdButton";
import { globalStyles } from "../../styles/global";
import { Avatar, Title, Caption } from "react-native-paper";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={[styles.container, globalStyles.pinkBackground]}>

    <View style={styles.userInfoSection}>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Avatar.Image
          source={{
            uri: "https://images.saymedia-content.com/.image/t_share/MTc2NDU3MDE0NzExNjkwNDUz/about-steve-jobs.jpg",
          }}
            size={70}
        />
        <View style={{ marginLeft: 15, flexDirection: "column" }}>
          <Title style={styles.title}>Steve Jobs</Title>
          <Caption style={styles.caption}>@stevejobs</Caption>
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
        buttonPress={() => {}}
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
  buttonSection: {
    margin: 5,
    paddingLeft: 20,
  },
  button: {
    margin: 5,
    borderRadius: 30,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
});

export default ProfileScreen;