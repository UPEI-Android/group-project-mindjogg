import React from "react";
import { Text, View, Button } from "react-native";

const EmergencySupportListScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        This is the EmergencySupportListScreen.
      </Text>
      <Button
        title="Go to Emergency Support Description"
        onPress={() => navigation.push("EmergencySupportDescriptionScreen")} 
      />
    </View>
  );
}

export default EmergencySupportListScreen;