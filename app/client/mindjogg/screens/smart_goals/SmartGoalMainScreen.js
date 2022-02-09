import React from "react";
import { Text, View, Button } from "react-native";

const SmartGoalMainScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        This is the SmartGoalMainScreen.
      </Text>
      <Button
        title="Go to SMart Goal Edit"
        onPress={() => navigation.push("SmartGoalEditScreen")}
      />
    </View>
  );
}

export default SmartGoalMainScreen;