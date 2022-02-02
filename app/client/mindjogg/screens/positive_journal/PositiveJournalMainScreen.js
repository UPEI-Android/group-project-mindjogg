import React from "react";
import { Text, View, Button } from "react-native";

const PositiveJournalMainScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        This is the PositiveJournalMainScreen.
      </Text>
      <Button
        title="Go to Psoitive Journal Edit"
        onPress={() => navigation.push("PositiveJournalEditScreen")} 
      />
    </View>
  );
}

export default PositiveJournalMainScreen;