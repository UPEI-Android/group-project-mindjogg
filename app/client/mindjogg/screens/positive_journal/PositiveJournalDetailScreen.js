import React from "react";
import { globalStyles } from "../../styles/global";
import { ScrollView, StyleSheet, Dimensions, Text, View } from "react-native";
import axios from "axios";

import propTypes from "prop-types";
import StdButton from "../../components/StdButton/StdButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const backend = "http://192.168.0.116:8080";

const PositiveJournalDetailScreen = ({route,navigation}) => {
  const journalEntry= {title:route.params.title, type: route.params.type, entry: route.params.entry }
//deleting entry function
const deleteEntry = async () => {
  const userToken = await AsyncStorage.getItem("userToken");
  const data = JSON.stringify({
    title: route.params.title
  });

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
      <ScrollView style={[styles.supportContainer, { marginLeft: 15 }]}>
        <View style={{ marginTop: 50, marginLeft: 30 }}>
          <Text style={{ fontSize: 20, color: "white" }}>
            Type : {route.params.type}
          </Text>
          <Text style={{ fontSize: 35, color: "white" }}>
            Title : {route.params.title}
          </Text>
          <Text style={{ fontSize: 25 }}>Entry: {route.params.entry}</Text>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row",
            marginTop: 15, marginBottom:10,
            justifyContent: "center",}}>

      <StdButton
            text={"Delete"}
            buttonColour={"#663591"}
            buttonWidth={125}
            buttonPress={() => {
              deleteEntry();
              navigation.push("PositiveJournalMainScreen",route.params.title);
            }}
          />
          <View style={{marginLeft:20}}>
          <StdButton
            text={"Edit"}
            buttonColour={"#663591"}
            buttonWidth={125}
            buttonPress={() => {
              navigation.push("PositiveJournalEditModifyScreen",journalEntry);
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
    backgroundColor: globalStyles.purple.color,
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