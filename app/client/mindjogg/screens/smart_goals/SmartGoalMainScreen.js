import React from "react";
import { Text, View, Button } from "react-native";

const SmartGoalMainScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Your Smart Goals 
      </Text>
      <Button
        title="Edit"
        onPress={() => navigation.push("SmartGoalEditScreen")}
      />
    </View>
  );
}

export default SmartGoalMainScreen;