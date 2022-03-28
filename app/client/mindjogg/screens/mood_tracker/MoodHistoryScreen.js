import { React, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../../styles/global";
import StdButton from "../../components/StdButton/StdButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { VictoryChart, VictoryBar, VictoryLabel } from "victory-native";
const MoodTrackerMainScreen = ({ navigation }) => {
  const moodHistory = [
    {
      id: 1,
      mood: "Happy",
      moodDate: "2022-03-28T02:41:05.621Z",
      moodNote: " jhdksajh okskd ajsdkj ",
      moodFrequency: 1,
      label: "Happy",
    },
    {
      id: 2,
      mood: "Sad",
      moodDate: "2020-01-02",
      moodNote: "",
      moodFrequency: 5,
      label: "Sad",
    },
    {
      id: 3,
      mood: "Angry",
      moodDate: "2020-01-02",
      moodNote: "",
      moodFrequency: 7,
      label: "Angry",
    },
    {
      id: 4,
      mood: "Love",
      moodDate: "2020-01-03",
      moodNote: "",
      moodFrequency: 2,
      label: "Love",
    },
    {
      id: 5,
      mood: "Bored",
      moodDate: "2020-01-02",
      moodNote: "",
      moodFrequency: 1,
      label: "Bored",
    },
    {
      id: 6,
      mood: "Worried",
      moodDate: "2020-01-02",
      moodNote: "",
      moodFrequency: 4,
      label: "Worried",
    },
    {
      id: 7,
      mood: "Blessed",
      moodDate: "2020-01-02",
      moodNote: "",
      moodFrequency: 2,
      label: "Blessed",
    },
    {
      id: 8,
      mood: "Sleepy",
      moodDate: "2020-01-05",
      moodNote: "",
      moodFrequency: 5,
      label: "Sleepy",
    },
    {
      id: 9,
      mood: "Sick",
      moodDate: "2020-01-02",
      moodNote: "",
      moodFrequency: 2,
      label: "Sick",
    },
    {
      id: 10,
      mood: "Lonely",
      moodDate: "2020-01-02",
      moodNote: "",
      moodFrequency: 3,
      label: "Lonely",
    },
    {
      id: 11,
      mood: "Cry",
      moodDate: "2020-01-02",
      moodNote: "",
      moodFrequency: 1,
      label: "Cry",
    },
    {
      id: 12,
      mood: "Hungry",
      moodDate: "2020-01-02",
      moodNote: "",
      moodFrequency: 1,
      label: "Hungry",
    },
  ];
  const [selectedMood, setSelectedMood] = useState("");
  const moodEmoji = (mood) => {
    switch (mood) {
      case "Happy":
        return "😀";
        break;
      case "Sad":
        return "😢";
        break;
      case "Angry":
        return "😡";
        break;
      case "Love":
        return "😍";
        break;
      case "Bored":
        return "😒";
        break;
      case "Worried":
        return "🙁";
        break;
      case "Blessed":
        return "😇";
        break;
      case "Sleepy":
        return "😴";
        break;
      case "Sick":
        return "🤒";
        break;
      case "Lonely":
        return "☹️";
        break;
      case "Cry":
        return "😭";
        break;
      case "Hungry":
        return "😋";
        break;
      default:
        return "😀";
        break;
    }
  };

  const timeConverter = (timestamp) => {
    let a = new Date(timestamp);
    let months = [
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
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    // covert hour to 12 hour format add AM or PM if formatedHour is 0 then formatedHour is 12
    let formatedHour = hour > 12 ? hour - 12 : hour;
    formatedHour = formatedHour == 0 ? 12 : formatedHour;
    let timeSuffix = hour >= 12 ? "PM" : "AM";
    let time =
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

  const renderItem = ({ item }) => {
    const moodIcon = moodEmoji(item.mood);
    const moodDate = timeConverter(item.moodDate);
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

  return (
    <SafeAreaView style={[styles.container, globalStyles.pinkBackground]}>
      <View style={styles.graphContainer}>
        <Text style={styles.graphTitle}>Weekly Mood Frequency</Text>
        <VictoryBar
          style={{ data: { fill: "#9b7fba", width: 20 } }}
          animate={{
            duration: 2000,
            onLoad: { duration: 5000 },
          }}
          data={moodHistory}
          x="id"
          y="moodFrequency"
          labelComponent={
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
            data={moodHistory}
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
