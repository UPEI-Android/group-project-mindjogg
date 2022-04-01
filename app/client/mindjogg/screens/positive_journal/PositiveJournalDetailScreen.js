import React from "react";
import { globalStyles} from "../../styles/global";
import { ScrollView, StyleSheet, Dimensions, Text, View } from "react-native";

import propTypes from "prop-types";



const PositiveJournalDetailScreen = ({route}) => {
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