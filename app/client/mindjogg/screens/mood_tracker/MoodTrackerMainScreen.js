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
import EMOJI from "../../data/emoji";

const MoodTrackerMainScreen = ({ navigation }) => {
  const moodData = {
    dateTime: "",
    moodNote: "",
  };

  const [selectedMood, setSelectedMood] = useState("");

  const handleMoodSubmit = (values) => {
    values.dateTime = new Date().toISOString();
    console.log(
      `mood: ${selectedMood} moodDate: ${values.dateTime} moodNote: ${values.moodNote}`
    );
    setSelectedMood("");
  };

  const Item = ({ title, icon }) => (
    <View style={[selectedMood === title ? styles.itemSelected : styles.item]}>
      <Image
        source={icon}
        style={{
          width: 50,
          height: 50,
          resizeMode: "stretch",
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedMood(item.title);
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
                    data={EMOJI}
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
                      navigation.push("MoodHistoryScreen");
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
    backgroundColor: "#9b7fba",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    height: 75,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  itemSelected: {
    backgroundColor: "#3f2d52",
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
