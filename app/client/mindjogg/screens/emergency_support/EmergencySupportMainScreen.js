import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import axios from "axios";
import { globalStyles } from "../../styles/global";
import StdCard from "../../components/StdCard/StdCard";

const askHelp = async () => {
  Alert.alert("Calling 911 ...");
};

/**
 * Gets a List of Emergency Services
 */
const retrieveServices = async () => {
  try {
    var service = await axios.get("http://192.168.2.35:8080/emergency/list", {
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWY1NTA0MWY4M2VlMTJiNzM3ZDZhYWEiLCJpYXQiOjE2NDY0MjU3NjB9.faIaGiTsl-GQt3TcIxSiX6VkUSWKPt3fn6yjVh9nn-E",
      },
    });

    // axios.get("http://192.168.2.35:8080/emergency/list").then((res) => {
    //   console.log(res);
    // });
  } catch (err) {
    console.log(err.stack);
  }

  let servicesList = service.data;
  return servicesList;
  //console.log(servicesList);
};

const EmergencySupportMainScreen = ({ navigation }) => {
  var emergList = [];

  retrieveServices().then((res) => {
    emergList = res;
    console.log(emergList[0]); //For Debugging, prints out desired obj
  });

  console.log(emergList); //emergList becomes undefined once it leaves line 47-50

  return (
    <View style={styles.container}>
      <View style={styles.sosButton}>
        <Text style={styles.headerTitleText}>Immediate Help Needed?</Text>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => {
            askHelp();
          }}
        >
          <Text style={styles.sosButtonText}> Call 911 </Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.footerTitle}>
          <Text style={styles.footerTitleText}>
            Available Supports Near You
          </Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          {/* <View style={styles.supportContainer}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <StdCard
                title={"emergencyItem.name"}
                description={"emergencyItem.description"}
                elevation={10}
                width={200}
                height={200}
              ></StdCard>
            </View>
          </View>

          <View style={styles.supportContainer}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <StdCard
                title={"emergencyItem.name"}
                description={"emergencyItem.description"}
                elevation={20}
                width={200}
                height={200}
              ></StdCard>
            </View>
          </View>

          <View style={styles.supportContainer}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <StdCard
                title={"emergencyItem.name"}
                description={"emergencyItem.description"}
                elevation={20}
                width={200}
                height={200}
              ></StdCard>
            </View>
          </View> */}

          {/* Error pops up here because emergList is not accepting the arrayValues and is undefined */}
          {emergList.map((emergencyItem) => {
            return (
              <View key={emergencyItem.id} style={styles.supportContainer}>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <StdCard
                    title={emergencyItem.name}
                    description={emergencyItem.description}
                    elevation={20}
                    width={200}
                    height={200}
                  ></StdCard>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.pinkBackground.backgroundColor,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    backgroundColor: globalStyles.purple.color,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.999,
    marginTop: Dimensions.get("window").height * 0.03,
  },
  sosButton: {
    alignItems: "center",
  },
  sosButtonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: globalStyles.white.color,
  },
  headerTitleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: globalStyles.purple.color,
    marginTop: Dimensions.get("window").height * 0.01,
  },
  footerTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: globalStyles.purple.color,
  },
  footerTitle: {
    alignItems: "center",
    marginTop: Dimensions.get("window").height * 0.05,
  },
  supportContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: Dimensions.get("window").height * 0.05,
    //backgroundColor: globalStyles.purple.color,
    height: Dimensions.get("window").height * 0.25,
    width: Dimensions.get("window").width * 0.6,
    margin: 5,
  },
});

export default EmergencySupportMainScreen;
