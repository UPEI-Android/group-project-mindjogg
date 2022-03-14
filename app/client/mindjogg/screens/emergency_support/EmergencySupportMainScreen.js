import React from "react";
import { Text, View, Alert } from "react-native";
import { useState, useEffect } from "react";
import {
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import StdCard from "../../components/StdCard/StdCard";
import { globalStyles } from "../../styles/global";
import axios from "axios";

var count = 0;
const IP_ADDRESS = "192.168.2.35:8080";

const askHelp = () => {
  Alert.alert("Calling 911 ...");
};

const EmergencySupportMainScreen = ({ navigation }) => {
  const [emergList, setEmergList] = useState([]);

  /**
   * Gets a List of Emergency Services
   */
  const retrieveServices = async () => {
    try {
      //Change the IP address to your Local Address
      var service = await axios.get(
        "http://" + IP_ADDRESS + "/emergency/list",
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWY1NTA0MWY4M2VlMTJiNzM3ZDZhYWEiLCJpYXQiOjE2NDY0MjU3NjB9.faIaGiTsl-GQt3TcIxSiX6VkUSWKPt3fn6yjVh9nn-E",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }

    const servicesList = service.data;
    //console.log(servicesList);
    return servicesList;
  };

  useEffect(() => {
    retrieveServices().then((res) => {
      setEmergList(res);
    });
  }, []);

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
          <Text style={styles.footerTitleText}>Emergency Support Needed?</Text>
          <Text style={styles.footerTitleText}>
            Available supports near you!
          </Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          {/*Display the parsed information on cards*/}
          {emergList.map((emergencyItem) => {
            count++;
            return (
              <View key={count} style={styles.supportContainer}>
                <View
                  key={emergencyItem.id}
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <StdCard
                    title={emergencyItem.name}
                    description={emergencyItem.description}
                    elevation={20}
                    width={250}
                    height={215}
                    buttonPress={() => {
                      navigation.navigate(
                        "EmergencySupportDescriptionScreen",
                        emergencyItem
                      );
                    }}
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
    marginTop: Dimensions.get("window").height * 0.01,
    //backgroundColor: globalStyles.purple.color,
    height: Dimensions.get("window").height * 0.3,
    width: Dimensions.get("window").width * 0.7,
    margin: 5,
  },
});

export default EmergencySupportMainScreen;
