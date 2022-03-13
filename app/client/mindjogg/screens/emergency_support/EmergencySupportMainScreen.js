import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../../styles/global";

const EmergencySupportMainScreen = () => {
  return (
    <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" },globalStyles.pinkBackground]}>
      <Text>
        Emergency Support Needed?
      </Text>
      <Button
        title="Find More Support"
      />
    </View>
  );
}

export default EmergencySupportMainScreen;