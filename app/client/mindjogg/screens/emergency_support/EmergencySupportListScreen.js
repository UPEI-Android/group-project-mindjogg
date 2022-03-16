import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../../styles/global";

const EmergencySupportListScreen = () => {
  return (
    <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" },globalStyles.pinkBackground]}>
      <Text>
        Available Supports Near You
        {/* TODO: add list of supports */}
      </Text>
      {/* Learn more button for each support */}
      <Button
        title="Learn More"
      />
    </View>
  );
}

export default EmergencySupportListScreen;