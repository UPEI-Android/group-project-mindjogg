import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../styles/global";

const PositiveJournalEditScreen = () => {
  return (
    <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" },globalStyles.pinkBackground]}>
      <Text>
        Edit Positive Journal
      </Text>
    </View>
  );
}

export default PositiveJournalEditScreen;