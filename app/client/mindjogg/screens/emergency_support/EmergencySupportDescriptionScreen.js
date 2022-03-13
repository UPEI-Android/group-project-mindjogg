import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../styles/global";
const EmergencySupportDescriptionScreen = () => {
  return (
    <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" },globalStyles.pinkBackground]}>
      <Text>
        UPEI Food Bank
      </Text>
    </View>
  );
}

export default EmergencySupportDescriptionScreen;