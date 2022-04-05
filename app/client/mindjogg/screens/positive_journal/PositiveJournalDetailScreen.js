import React from "react";
import { globalStyles} from "../../styles/global";
import { ScrollView, StyleSheet, Dimensions, Text, View } from "react-native";
import axios from "axios";

import propTypes from "prop-types";
import StdButton from "../../components/StdButton/StdButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const backend = "http://192.168.0.116:8080";


const PositiveJournalDetailScreen = ({route,navigation}) => {
  
//deleting entry function
const deleteEntry = async () => {
  const userToken = await AsyncStorage.getItem("userToken");
  const data = JSON.stringify({
    title: route.params.title
  });

  await axios.post(backend + "/users/deleteJournalEntry", data, {
    headers: { "Content-Type": "application/json", "auth-token": userToken },
  });

};
  return (
    <View style={[{ flex: 1, justifyContent: "center" },globalStyles.pinkBackground]}>
    <ScrollView style={[styles.supportContainer,{marginLeft:15}]}>

    <View style={{marginTop:50, marginLeft:30}}>
          <Text style={{fontSize:20,color:"white"}}>
              Type : {route.params.type}
            </Text> 
          <Text style={{fontSize:35,color:"white"}}>
              Title : {route.params.title}
            </Text>   
      <Text style={{fontSize:25}}>
        Entry: {route.params.entry}
      </Text>
      </View>

      </ScrollView>
      <View style={{marginLeft:15,marginBottom:20, marginTop:10}}>
      <StdButton
            text={"Delete"}
            buttonColour={"#663591"}
            buttonWidth={125}
            buttonPress={() => {
              deleteEntry();
              navigation.push("PositiveJournalMainScreen",route.params.title);
            }}
          />
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
PositiveJournalDetailScreen.propTypes = { route: propTypes.any };

export default PositiveJournalDetailScreen;