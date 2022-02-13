import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import StdButton from "../../components/StdButton/StdButton";

const SplashScreen = ({ navigation }) => {
    return(
        <View style={styles.center}>
            <StdButton 
                text="Get Started"
                uppercaseOn={false}
                buttonPress={() => navigation.push("SignInScreen")}
            />
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  });