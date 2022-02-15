import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../../styles/global";

const PositiveJournalMainScreen = ({navigation}) => {
  return (
    <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" },globalStyles.pinkBackground]}>
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