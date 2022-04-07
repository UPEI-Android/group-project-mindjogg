import { React, useState, useEffect } from "react";

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { globalStyles } from "../../styles/global";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { VictoryBar, VictoryLabel } from "victory-native";
import propTypes from "prop-types";

import axios from "axios";


const MoodTrackerMainScreen = ({ navigation }) => {
  const [moodFrequencyList, setMoodFrequencyList] = useState([
    { mood: "happy", moodFrequency: 0 },
  ]);

  const [moodData, setMoodData] = useState([]);
  /**
   * Gets a List of Emergency Services
   */
  const retrieveServices = async () => {
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      //Change the IP address to your Local Address
      const service = await axios.get(global.backend + "/moodtracker/frequencyMoods", {
        headers: {
          "Content-Type": "application/json",
          "auth-token": userToken,
        },
      });
      const moodFrequencyList = service.data;
      return moodFrequencyList;
    } catch (err) {
      console.log(err);
    }
  };

  const retrieveMoods = async () => {
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      //Change the IP address to your Local Address
      const res = await axios.get(global.backend + "/moodtracker/getMood", {
        headers: {
          "Content-Type": "application/json",
          "auth-token": userToken,
        },
      });

      const moodList = res.data;
      return moodList;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    retrieveServices().then((res) => {
      setMoodFrequencyList(res);
    });
    retrieveMoods().then((res) => {
      setMoodData(res);
    });
  }, []);

  // state selectedMood is used to store clicked mood.
  const [selectedMood, setSelectedMood] = useState("");

  /**
   *
   * @param {String} mood - mood name
   * @returns {String} emotion icon in emoji format. This emoji is a string so it can be manipulated as string.
   */
  const moodEmoji = (mood) => {
    switch (mood) {
      case "Happy":
        return "😀";
      case "Sad":
        return "😢";
      case "Angry":
        return "😡";
      case "Love":
        return "😍";
      case "Bored":
        return "😒";
      case "Worried":
        return "🙁";
      case "Blessed":
        return "😇";
      case "Sleepy":
        return "😴";
      case "Sick":
        return "🤒";
      case "Lonely":
        return "☹️";
      case "Cry":
        return "😭";
      case "Hungry":
        return "😋";
      default:
        return "😀";
    }
  };

  /**
   * This function coverts ISO date to a readable date
   * @param {String} timestamp in ISO time format
   * @returns string of date
   */
  const timeConverter = (timestamp) => {
    const a = new Date(timestamp);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    // covert hour to 12 hour format add AM or PM if formatedHour is 0 then formatedHour is 12
    let formatedHour = hour > 12 ? hour - 12 : hour;
    formatedHour = formatedHour == 0 ? 12 : formatedHour;
    const timeSuffix = hour >= 12 ? "PM" : "AM";
    const time =
      date +
      " " +
      month +
      ", " +
      year +
      " at " +
      formatedHour +
      ":" +
      min +
      " " +
      timeSuffix;
    return time;
  };

  /**
   * This is the Item component for the FlatList
   * @prop {Object} mood - mood
   * @prop {String} moodDate - mood date
   * @prop {String} moodIcon - mood icon (emoji)
   */
  const Item = ({ mood, moodDate, moodIcon }) => (
    <View style={[selectedMood === mood ? styles.itemSelected : styles.item]}>
      <Text style={{ fontSize: 25 }}>{moodIcon}</Text>
      <Text style={[styles.mood, { marginLeft: 10 }]}>{mood}</Text>
      <Text style={[styles.mood, { marginLeft: 15 }]}> {moodDate}</Text>
      <Icon
        name="arrow-right"
        size={20}
        color="white"
        style={{ marginLeft: "auto" }}
      />
    </View>
  );
  /**
   * This is the FlatList render component
   * @prop {Object} item - the mood object
   */
  const renderItem = ({ item }) => {
    const moodIcon = moodEmoji(item.mood);
    const moodDate = timeConverter(item.moodDate);

    // navigationParams is the object that is passed to the next screen
    const navigationParams = {
      mood: item.mood,
      moodDate: moodDate,
      moodNote: item.moodNote,
      moodFrequency: item.moodFrequency,
      moodIcon: moodIcon,
    };
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedMood(item.mood);
          navigation.navigate("MoodEditScreen", navigationParams);
        }}
      >
        <Item mood={item.mood} moodDate={moodDate} moodIcon={moodIcon} />
      </TouchableOpacity>
    );
  };

  Item.propTypes = {
    mood: propTypes.any,
    moodDate: propTypes.any,
    moodIcon: propTypes.any,
  };

  return (
    <SafeAreaView style={[styles.container, globalStyles.pinkBackground]}>
      <View style={styles.graphContainer}>
        <Text style={styles.graphTitle}>Weekly Mood Frequency</Text>
        <VictoryBar
          style={{ data: { fill: "#9b7fba", width: 20 } }}
          data={moodFrequencyList}
          x="mood"
          y="moodFrequency"
          animate={{
            duration: 2000,
            onLoad: { duration: 0 },
          }}
          labelComponent={
            // this is the code for alligning  the label vertically
            <VictoryLabel
              angle={90}
              verticalAnchor="middle"
              textAnchor="end"
              style={{ fill: "black", fontSize: 10 }}
            />
          }
          width={Dimensions.get("window").width + 20}
          height={Dimensions.get("window").height / 2.5}
        />
      </View>
      <View style={styles.moodHistoryContainer}>
        <Text style={styles.moodHistoryTitle}>Mood History</Text>
        <View style={styles.moodHistoryList}>
          <FlatList
            data={moodData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  graphContainer: {
    flex: 1,
  },
  graphTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: Dimensions.get("window").width * 0.03,
    marginTop: Dimensions.get("window").height * 0.023,
    color: "#9b7fba",
  },
  moodHistoryContainer: {
    flex: 1,
  },
  moodHistoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: Dimensions.get("window").width * 0.03,
    marginTop: Dimensions.get("window").height * 0.023,
    color: "#9b7fba",
  },
  moodHistoryList: {
    flex: 1,
    marginTop: Dimensions.get("window").height * 0.02,
    marginLeft: Dimensions.get("window").width * 0.02,
  },
  item: {
    backgroundColor: "#9b7fba",
    padding: 10,
    paddingLeft: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    height: Dimensions.get("window").height * 0.09,
    width: Dimensions.get("window").width * 0.9,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    flexDirection: "row",
  },
  itemSelected: {
    backgroundColor: "#3f2d52",
    padding: 10,
    paddingLeft: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    height: Dimensions.get("window").height * 0.09,
    width: Dimensions.get("window").width * 0.9,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    flexDirection: "row",
  },
  mood: {
    fontSize: 18,
    color: "white",
  },
});

export default MoodTrackerMainScreen;
