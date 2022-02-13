import React from "react";
import { Text, View} from "react-native";
import { globalStyles } from "../../styles/global";
const SignUpScreen = () => {
  return (
    <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" },globalStyles.pinkBackground]}>
      <Text>
        Create an account to continue
      </Text>
    </View>
  );
}

export default SignUpScreen;
