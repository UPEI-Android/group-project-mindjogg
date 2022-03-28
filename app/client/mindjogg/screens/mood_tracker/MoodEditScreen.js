import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../styles/global";

import propTypes from "prop-types";

const MoodEditScreen = ({ route }) => {
  return (
    <View style={[{ flex: 1 }, globalStyles.pinkBackground]}>
      <View style={styles.supportContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.moodIcon}>{route.params.moodIcon}</Text>
          <Text style={styles.mood}>{route.params.mood}</Text>
          <Text style={styles.mood}>{route.params.moodDate}</Text>
          <Text style={styles.mood}>{route.params.moodNote}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  supportContainer: {
    flex: 1,
    marginTop: Dimensions.get("window").height * 0.015,
    backgroundColor: globalStyles.purple.color,
    height: Dimensions.get("window").height * 0.75,
    width: Dimensions.get("window").width * 0.9,
    margin: 5,
    borderRadius: 30,
    marginLeft: Dimensions.get("window").width * 0.05,
  },
  detailContainer: {
    marginTop: Dimensions.get("window").height * 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  moodIcon: {
    fontSize: Dimensions.get("window").height * 0.15,
  },
  mood: {
    fontSize: 25,
    color: "white",
    marginTop: Dimensions.get("window").height * 0.05,
  },
});

MoodEditScreen.propTypes = { route: propTypes.any };
export default MoodEditScreen;
