import React from "react";
import { globalStyles} from "../../styles/global";
import { ScrollView, StyleSheet, Dimensions, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import propTypes from "prop-types";
import StdButton from "../../components/StdButton/StdButton";



const SmartGoalDetailScreen = ({navigation,route}) => {

  const goalEntry={
    title: route.params.title,
    specific: route.params.specific,
    measurable: route.params.measurable,
    attainable: route.params.attainable,
    relevant: route.params.relevant,
    time: route.params.time
  };

    //deleting entry function
    const deleteEntry = async () => {
      const userToken = await AsyncStorage.getItem("userToken");
      const data = JSON.stringify({
        title: route.params.title,
      });
  
      await axios.post(global.backend + "/users/deleteGoalEntry", data, {
        headers: { "Content-Type": "application/json", "auth-token": userToken },
      });
    };

  return (
    <View style={[{ flex: 1, justifyContent: "center" },globalStyles.pinkBackground]}>
    <ScrollView style={[styles.supportContainer,{marginLeft:15}]}>

    <View style={{marginTop:50, marginLeft:30}}>
          <Text style={{fontSize:35,color:"white"}}>
              Goal : {route.params.title}
            </Text> 
          <Text style={{fontSize:25}}>
              Specific : {route.params.specific}
            </Text>   
          <Text style={{fontSize:25}}>
              Measurable: {route.params.measurable}
          </Text>
          <Text style={{fontSize:25}}>
                Attainable: {route.params.attainable}
          </Text>
          <Text style={{fontSize:25}}>
                Relevant: {route.params.relevant}
          </Text>
          <Text style={{fontSize:25}}>
                Time-Bound: {route.params.time}
          </Text>
      </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          marginBottom: 10,
          justifyContent: "center",
        }}
      >
        <StdButton
          text={"Delete"}
          buttonColour={"#663591"}
          buttonWidth={125}
          buttonPress={() => {
            deleteEntry();
            navigation.push("SmartGoalMainScreen", route.params.title);
          }}
        />

      <View style={{ marginLeft: 20 }}>
          <StdButton
            text={"Edit"}
            buttonColour={"#663591"}
            buttonWidth={125}
            buttonPress={() => {
              navigation.push("SmartGoalEditModifyScreen", goalEntry);
            }}
          />
        </View>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  supportContainer: {
    flex: 1,
    marginTop: Dimensions.get("window").height * 0.015,
    marginRight: 100,
    backgroundColor: globalStyles.purple.color,
    height: Dimensions.get("window").height * 0.7,
    width: Dimensions.get("window").width * 0.9,
    margin: 5,
    borderRadius: 30,
  },
});
SmartGoalDetailScreen.propTypes = { route: propTypes.any };

export default SmartGoalDetailScreen;