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


      <StdButton
        text="Personal Information"
        uppercaseOn={false}
        buttonPress={() => {}}
      />
      <StdButton
        text="Contact Information"
        uppercaseOn={false}
        buttonPress={() => {}}
      />
      <StdButton
        text="Emergency Contacts"
        uppercaseOn={false}
        buttonPress={() => {}}
      />
      <StdButton
        text="Update Password"
        uppercaseOn={false}
        buttonPress={() => {}}
      />

      <StdButton
        text="Logout"
        uppercaseOn={false}
        buttonPress={() => {}}
      />
    </View>
  );
};

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
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
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default ProfileScreen;