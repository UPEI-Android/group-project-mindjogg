import React from "react";
import { Text, View, Button } from "react-native";

const EmergencySupportListScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Available Supports Near You
        {/* TODO: add list of supports */}
      </Text>
      {/* Learn more button for each support */}
      <Button
        title="Learn More"
        onPress={() => navigation.push("EmergencySupportDescriptionScreen")} 
      />
    </View>
  );
}

export default EmergencySupportListScreen;