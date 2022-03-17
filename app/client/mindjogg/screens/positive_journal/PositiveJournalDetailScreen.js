import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../styles/global";
import propTypes from "prop-types";



const PositiveJournalDetailScreen = ({route}) => {
  return (
    <View style={[{ flex: 1, justifyContent: "flex-start" },globalStyles.pinkBackground]}>
    <View style={{marginTop:50, marginLeft:30}}>
          <Text style={{fontSize:40}}>
              Type : {route.params.type}
            </Text> 
          <Text style={{fontSize:40}}>
              Title : {route.params.title}
            </Text>   
      <Text style={{fontSize:25}}>
        Entry: {route.params.entry}
      </Text>
      </View>
    </View>
  );
}

PositiveJournalDetailScreen.propTypes = { route: propTypes.any };

export default PositiveJournalDetailScreen;