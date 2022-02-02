import React from "react";
import { Text, View, Button } from "react-native";

const EmergencySupportMainScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        This is the EmergencySupportMainScreen.
      </Text>
      <Button
        title="Go to EmergencySupportListScreen"
        onPress={() => navigation.push("EmergencySupportListScreen")} 
      />
    </View>
  );
}

export default EmergencySupportMainScreen;