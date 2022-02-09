import React from "react";
import { Text, View, Button } from "react-native";

const PositiveJournalMainScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Your Positive Journals
      </Text>
      <Button
        title="Edit"
        onPress={() => navigation.push("PositiveJournalEditScreen")} 
      />
    </View>
  );
}

export default PositiveJournalMainScreen;