import React, { useState, useEffect } from "react";
import { View, ScrollView, Dimensions, StyleSheet, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import propTypes from "prop-types";

const backend = "http://192.168.0.135:8080";

var count = 0;
const PositiveJournalMainScreen = ({ navigation, route }) => {
  const [journalEntries, setJournalEntries] = useState([]);

  /**
   * Gets a List of Journal Entries
   */
  const retrieveJournalEntries = async () => {
    try {
      const userToken = await AsyncStorage.getItem("userToken");

      const journalEntry = await axios.get(
        backend + "/users/getJournalEntries",
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": userToken,
          },
        }
      );
      return journalEntry.data.userJournal;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    retrieveJournalEntries().then((journalEntry) => {
      setJournalEntries(journalEntry);
    });
  }, [journalEntries.toString(), route.params]);

  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        globalStyles.pinkBackground,
      ]}
    >
      {/* <View style={styles.spaceContainer}></View> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.spaceContainer}
      >
        {/*Display the parsed information on cards*/}
        {journalEntries.map((journalEntry) => {
          count++;
          return (
            <View key={count} style={styles.supportContainer}>
              <View key={journalEntry.id}>
                <TouchableOpacity
                  style={styles.journalEntryContainer}
                  onPress={() => {
                    navigation.navigate(
                      "PositiveJournalDetailScreen",
                      journalEntry
                    );
                  }}
                >
                  <Icon
                    name="notebook"
                    size={80}
                    color="#9B7FBA"
                    style={{ marginLeft: 5, marginTop: 5.5 }}
                  />
                  <View style={styles.journalEntryTextContainer}>
                    <Text style={styles.journalEntriesDate}>  {journalEntry.date}</Text>
                    <Text style={styles.journalEntriesTitle}>
                      {journalEntry.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.plusContainer}>
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => navigation.push("PositiveJournalEditScreen")}
        >
          {/* <Text style={styles.plusButtonText}>+</Text> */}
          <Icon name="pencil" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  supportContainer: {
    flex: 1,
    marginTop: Dimensions.get("window").height * 0.02,
    marginBottom: Dimensions.get("window").height * 0.02,
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.9,
  },
  spaceContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: Dimensions.get("window").height * 0.01,
  },
  journalEntryContainer: {
    width: Dimensions.get("window").width * 0.9,
    height: 100,
    flexDirection: "row",
  },
  journalEntryTextContainer: {
    marginTop: 5,
    marginLeft: 10,
  },
  journalEntriesTitle: {
    fontSize: 19,
    color: "#9B7FBA",
    fontWeight: "bold",
    marginTop: 5,
    width: Dimensions.get("window").width * 0.7,
    paddingBottom: 5,
  },
  journalEntriesDate: {
    fontSize: 15,
    color: "#9B7FBA",
    marginTop: 15,
  },
  button: {
    alignItems: "center",
    marginBottom: 65,
    marginTop: 20,
  },
  plusContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  plusButton: {
    backgroundColor: "#9B7FBA",
    opacity: 0.8,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 70 / 2,
    zIndex: 50,
    elevation: 50,
  },
  plusButtonText: {
    color: "white",
    fontSize: 50,
  },
});
PositiveJournalMainScreen.propTypes = { route: propTypes.any };

export default PositiveJournalMainScreen;
