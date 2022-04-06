import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import StdButton from "../../components/StdButton/StdButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import { globalStyles } from "../../styles/global";
import axios from "axios";

const backend = "http://192.168.0.135:8080";

const PositiveJournalEditScreen = ({ navigation }) => {
  const [journalEntry, setJournalEntry] = useState("");
  const [title, setJournalTitle] = useState("");
  const [type, setJournalType] = useState("Travel");

  const addNewEntry = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    const data = JSON.stringify({
      type: type,
      title: title,
      entry: journalEntry,
    });

    await axios.post(backend + "/users/addJournalEntry", data, {
      headers: { "Content-Type": "application/json", "auth-token": userToken },
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[{ flex: 1 }, globalStyles.pinkBackground]}>
        <View style={{ justifyContent: "space-between" }}>
          <TextInput
            style={styles.journalTitle}
            textAlignVertical="top"
            placeholder="Enter Title"
            onChangeText={(title) => setJournalTitle(title)}
          />
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>Category : </Text>
            <Picker
              selectedValue={type}
              style={{
                height: 1,
                width: 250,
                marginTop: 10,
                marginLeft: Dimensions.get("window").width * 0.01,
                marginBottom: 5,
              }}
              itemStyle={{ fontSize: 50 }}
              onValueChange={(itemValue) => setJournalType(itemValue)}
            >
              <Picker.Item style={styles.categoryText} label="None" value="" />
              <Picker.Item
                style={styles.categoryText}
                label="Travel"
                value="Travel"
              />
              <Picker.Item
                style={styles.categoryText}
                label="Personal"
                value="Personal"
              />
              <Picker.Item
                style={styles.categoryText}
                label="Work"
                value="Work"
              />
              <Picker.Item
                style={styles.categoryText}
                label="Life"
                value="Life"
              />
            </Picker>
          </View>
        </View>
        <TextInput
          style={styles.journalBody}
          textAlignVertical="top"
          placeholder="Enter your thoughts..."
          multiline={true}
          scrollEnabled={true}
          onChangeText={(entry) => setJournalEntry(entry)}
        />

        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            justifyContent: "center",
          }}
        >
          <StdButton
            text={"Cancel"}
            buttonColour={"#9B7FBA"}
            buttonWidth={150}
            buttonPress={() => navigation.push("PositiveJournalMainScreen")}
          />

          <View style={{ margin: Dimensions.get("window").width * 0.1 }}></View>
          <StdButton
            text={"Save"}
            buttonColour={"#663591"}
            buttonWidth={125}
            buttonPress={() => {
              addNewEntry();
              navigation.push("PositiveJournalMainScreen", journalEntry);
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  journalBody: {
    padding: 8,
    width: Dimensions.get("window").width * 0.97,
    height: Dimensions.get("window").height * 0.55,
    marginLeft: Dimensions.get("window").width * 0.02,
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: Dimensions.get("window").width * 0.02,
    marginBottom: Dimensions.get("window").height * 0.001,
    alignItems: "center",
  },
  categoryText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#9B7FBA",
  },
  journalTitle: {
    padding: 8,
    marginLeft: Dimensions.get("window").width * 0.015,
    marginTop: Dimensions.get("window").height * 0.02,
    width: Dimensions.get("window").width * 0.97,
  },
});
export default PositiveJournalEditScreen;
