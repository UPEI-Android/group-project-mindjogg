import React from "react";
import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions,
  ScrollView,
  Alert,
 } from "react-native";
import { globalStyles } from "../../styles/global";

const EmergencySupportMainScreen = () => {
  return (
    <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" },globalStyles.pinkBackground]}>
      <Text>
        Emergency Support Needed?
      </Text>
      <Button
        title="Find More Support"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.pinkBackground.backgroundColor, 
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    backgroundColor: globalStyles.purple.color,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.999,
    marginTop: Dimensions.get("window").height * 0.03,
  },
  sosButton: {
    alignItems: "center",
  },
  sosButtonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: globalStyles.white.color,
  },
  headerTitleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: globalStyles.purple.color,
    marginTop: Dimensions.get("window").height * 0.01,
  },
  footerTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: globalStyles.purple.color,
  },
  footerTitle: {
    alignItems: "center",
    marginTop: Dimensions.get("window").height * 0.05,
  },
  supportContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: Dimensions.get("window").height * 0.05,
    backgroundColor: globalStyles.purple.color,
    height: Dimensions.get("window").height * 0.2,
    width: Dimensions.get("window").width * 0.4,
    margin: 5,
  }
  
});

export default EmergencySupportMainScreen;