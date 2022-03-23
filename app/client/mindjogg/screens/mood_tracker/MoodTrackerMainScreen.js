import React from "react";
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

const DATA = [
  {
    id: "em1",
    title: "Love",
    icon: require("../../assets/emoji/love.png"),
  },
  {
    id: "em2",
    title: "Happy",
    icon: require("../../assets/emoji/happy.png"),
  },
  {
    id: "em3",
    title: "Blessed",
    icon: require("../../assets/emoji/blessed.png"),
  },
  {
    id: "em4",
    title: "Hungry",
    icon: require("../../assets/emoji/hungry.png"),
  },
  {
    id: "em5",
    title: "Bored",
    icon: require("../../assets/emoji/bored.png"),
  },
  {
    id: "em6",
    title: "Sad",
    icon: require("../../assets/emoji/sad.png"),
  },
  {
    id: "em7",
    title: "Worried",
    icon: require("../../assets/emoji/worried.png"),
  },
  {
    id: "em8",
    title: "Sleepy",
    icon: require("../../assets/emoji/sleepy.png"),
  },
  {
    id: "em9",
    title: "Sick",
    icon: require("../../assets/emoji/sick.png"),
  },
  {
    id: "em10",
    title: "Lonely",
    icon: require("../../assets/emoji/lonely.png"),
  },
  {
    id: "em11",
    title: "Cry",
    icon: require("../../assets/emoji/crying.png"),
  },
  {
    id: "em12",
    title: "Angry",
    icon: require("../../assets/emoji/angry.png"),
  },
];

const Item = ({ title, icon }) => (
  <View style={styles.item}>
    <Image
      source={icon + ""}
      style={{
        width: 50,
        height: 50,
        resizeMode: "stretch",
      }}
    />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MoodTrackerMainScreen = ({ navigation }) => {
  const mood = {
    title: "",
  };
  const moodData = {
    dateTime: "",
    moodNote: "",
  };

  const handleMoodSubmit = (values) => {
    values.dateTime = new Date().toLocaleString();
    console.log(
      `mood: ${mood.title} moodDate: ${values.dateTime} moodNote: ${values.moodNote}`
    );
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          mood.title = item.title;
        }}
      >
        <Item title={item.title} icon={item.icon} />
      </TouchableOpacity>
    );
  };

  return (
    <Formik
      initialValues={moodData}
      onSubmit={(values, actions) => {
        handleMoodSubmit(values);
        actions.resetForm();
      }}
    >
      {({ handleChange, handleSubmit, values }) => {
        const { moodNote } = values;
        return (
          <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={[{ flex: 1 }, globalStyles.pinkBackground]}>
                <Text style={styles.headerTitleText}>
                  How you are feeling now?
                </Text>
                <SafeAreaView style={styles.container}>
                  <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={4}
                  />
                </SafeAreaView>
                <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                  <TextInput
                    placeholder="Add a note"
                    value={moodNote}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={handleChange("moodNote")}
                  />
                  <View style={styles.button}>
                    <StdButton text="Save" buttonPress={handleSubmit} />
                  </View>
                  <TouchableOpacity
                    style={styles.footer}
                    onPress={() => {
                      console.log("pressed");
                    }}
                  >
                    <Text style={styles.text_footer}> See Mood History </Text>
                    <Icon name="arrow-right" color={"#683795"} size={20} />
                  </TouchableOpacity>
                </KeyboardAvoidingView>
              </View>
            </TouchableWithoutFeedback>
          </>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: Dimensions.get("window").height * 0.03,
  },
  item: {
    backgroundColor: "#9B7FBA",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    height: 75,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  title: {
    fontSize: 10,
    color: "white",
  },
  headerTitleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: globalStyles.purple.color,
    marginTop: Dimensions.get("window").height * 0.01,
    marginLeft: Dimensions.get("window").width * 0.04,
  },
  textInput: {
    height: Dimensions.get("window").height * 0.09,
    width: Dimensions.get("window").width * 0.9,
    marginTop: Dimensions.get("window").height * 0.03,
    paddingLeft: 10,
    marginLeft: Dimensions.get("window").width * 0.05,
    color: "#05375a",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  button: {
    alignItems: "center",
    marginTop: Dimensions.get("window").height * 0.04,
  },
  footer: {
    marginLeft: Dimensions.get("window").width * 0.35,
    marginTop: Dimensions.get("window").height * 0.03,
    flexDirection: "row",
  },
  text_footer: {
    color: "#683795",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default MoodTrackerMainScreen;
