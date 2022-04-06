import React from "react";
import { globalStyles } from "../../styles/global";
import { ScrollView, StyleSheet, Dimensions, Text, View } from "react-native";
import axios from "axios";

import propTypes from "prop-types";
import StdButton from "../../components/StdButton/StdButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

// URI for the backend, only need to update here now (globalized variable)

global.backend = "http://192.168.2.14:8080";

const PositiveJournalDetailScreen = ({ route, navigation }) => {
  const journalEntry = {
    title: route.params.title,
    type: route.params.type,
    entry: route.params.entry,
  };
  //deleting entry function
  const deleteEntry = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    const data = JSON.stringify({
      title: route.params.title,
    });
    // eslint-disable-line no-use-before-define
    await axios.post(backend + "/users/deleteJournalEntry", data, {
      headers: { "Content-Type": "application/json", "auth-token": userToken },
    });
  };
  return (
    <View
      style={[
        { flex: 1, justifyContent: "center" },
        globalStyles.pinkBackground,
      ]}
    >
      <ScrollView style={[styles.journalContainer, { marginLeft: 15 }]}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 35, color: "white" }}>
            {route.params.title}
          </Text>
          <View style={styles.journalSubTextContainer}>
            <Text style={{ fontSize: 15, color: "white" }}>
              Category: {route.params.type}
            </Text>
            <Text style={{ fontSize: 15, color: "white" }}>
              Date: {route.params.date}
            </Text>
          </View>
          <View style={styles.journalBody}>
            <Text style={{ fontSize: 20 }}>{route.params.entry}</Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          marginBottom: 10,
          justifyContent: "center",
        }}
      >
        <StdButton
          text={"Delete"}
          buttonColour={"#663591"}
          buttonWidth={125}
          buttonPress={() => {
            deleteEntry();
            navigation.push("PositiveJournalMainScreen", route.params.title);
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <StdButton
            text={"Edit"}
            buttonColour={"#663591"}
            buttonWidth={125}
            buttonPress={() => {
              navigation.push("PositiveJournalEditModifyScreen", journalEntry);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  journalContainer: {
    flex: 1,
    marginTop: Dimensions.get("window").height * 0.01,
    backgroundColor: "#9B7FBA",
    height: Dimensions.get("window").height * 0.5,
    width: Dimensions.get("window").width * 0.93,
    borderRadius: 15,
    marginBottom: Dimensions.get("window").height * 0.011,
  },
  journalSubTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Dimensions.get("window").height * 0.02,
  },
  journalTitle: {},
  journalBody: {
    marginTop: Dimensions.get("window").height * 0.01,
  },
});
PositiveJournalDetailScreen.propTypes = { route: propTypes.any };

export default PositiveJournalDetailScreen;
