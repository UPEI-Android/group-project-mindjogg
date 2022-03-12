import React from "react";
import { ScrollView, StyleSheet, Dimensions, Text, View } from "react-native";
import { globalStyles } from "../../styles/global";

const EmergencySupportDescriptionScreen = ({ route /**navigation */ }) => {
  return (
    <View
      style={[
        { flex: 1, justifyContent: "center", alignItems: "center" },
        globalStyles.pinkBackground,
      ]}
    >
      <ScrollView style={styles.supportContainer}>
        {/* Support Name */}
        <View style={styles.detailContainer}>
          <Text style={styles.supportName}>{route.params.name}</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.supportType}>{route.params.type}</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.supportAddress}>{route.params.address}</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.supportEmail}>{route.params.email}</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.supportPhone}>{route.params.phone}</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.supportDescription}>
            {route.params.description}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  supportName: {
    color: globalStyles.white.color,
    textDecorationLine: "underline",
    fontSize: 25,
  },

  supportType: {
    color: globalStyles.white.color,
    fontSize: 15,
  },

  supportAddress: {
    color: globalStyles.white.color,
    fontSize: 15,
  },

  supportEmail: {
    color: globalStyles.white.color,
    fontSize: 15,
  },

  supportPhone: {
    color: globalStyles.white.color,
    fontSize: 15,
  },

  supportDescription: {
    color: globalStyles.white.color,
    fontSize: 15,
    padding: 18,
    textAlign: "justify",
  },

  detailContainer: {
    marginTop: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  supportContainer: {
    flex: 1,
    marginTop: Dimensions.get("window").height * 0.015,
    backgroundColor: globalStyles.purple.color,
    height: Dimensions.get("window").height * 0.75,
    width: Dimensions.get("window").width * 0.9,
    margin: 5,
    borderRadius: 30,
  },
});

export default EmergencySupportDescriptionScreen;
