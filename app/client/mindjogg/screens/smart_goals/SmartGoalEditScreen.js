import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../styles/global";

const SmartGoalEditScreen = () => {
  return (
    <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" },globalStyles.pinkBackground]}>
      <Text>
        Edit Your Smart Goal
      </Text>
    </View>
  );
}

export default SmartGoalEditScreen;