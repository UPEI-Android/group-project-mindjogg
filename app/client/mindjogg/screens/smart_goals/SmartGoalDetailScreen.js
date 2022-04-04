import React from "react";
import { globalStyles} from "../../styles/global";
import { ScrollView, StyleSheet, Dimensions, Text, View } from "react-native";

import propTypes from "prop-types";



const SmartGoalDetailScreen = ({route}) => {
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