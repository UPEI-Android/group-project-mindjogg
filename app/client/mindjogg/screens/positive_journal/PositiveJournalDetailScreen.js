import React from "react";
import { globalStyles } from "../../styles/global";
import { ScrollView, StyleSheet, Dimensions, Text, View } from "react-native";

import propTypes from "prop-types";

const PositiveJournalDetailScreen = ({ route }) => {
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
              Date: 2020-05-01
            </Text>
          </View>
          <View style={styles.journalBody}>
            <Text style={{ fontSize: 20 }}>{route.params.entry}</Text>
          </View>
        </View>
      </ScrollView>
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
