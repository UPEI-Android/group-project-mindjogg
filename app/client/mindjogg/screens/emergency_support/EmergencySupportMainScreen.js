import React from "react";
import { Text, View, Button } from "react-native";

const EmergencySupportMainScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Emergency Support Needed?
      </Text>
      <Button
        title="Find More Support"
        onPress={() => navigation.push("EmergencySupportListScreen")} 
      />
    </View>
  );
}

export default EmergencySupportMainScreen;