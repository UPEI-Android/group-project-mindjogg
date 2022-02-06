import React from "react";
import { Text, View, Button } from "react-native";
import StdButton from "../../components/Button/Button";

const PositiveJournalMainScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is the PositiveJournalMainScreen.</Text>

      <StdButton
      // text={"Go to Positive Journal Edit"}
      // buttonColour={"#9B7FBA"}
      // buttonPress={() => navigation.push("PositiveJournalEditScreen")}
      />
    </View>
  );
};

export default PositiveJournalMainScreen;
