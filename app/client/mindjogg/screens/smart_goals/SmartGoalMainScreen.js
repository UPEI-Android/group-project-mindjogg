import React from "react";
import { Text, View } from "react-native";
import StdButton from "../../components/StdButton/StdButton";

const SmartGoalMainScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is the SmartGoalMainScreen.</Text>

      <StdButton
        // text={"Go to Positive Journal Edit"}
        // buttonColour={"#9B7FBA"}
        buttonPress={() => navigation.push("SmartGoalEditScreen")}
      />
    </View>
  );
};

export default SmartGoalMainScreen;
