import React from "react";
import {
    View, 
    StyleSheet, 
    Dimensions, 
} from "react-native";
import * as Animatable from "react-native-animatable";
import StdButton from "../../components/StdButton/StdButton";

const SplashScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Animatable.Image 
                    animation="bounceIn"
                    duration={1500}
                    source={require("../../assets/Getting_started_logo.png")}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <View style={styles.button_container}>
                <StdButton 
                    text="Get Started"
                    uppercaseOn={true}
                    buttonPress={() => navigation.push("SignInScreen")}
                />
            </View>
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#FFE3FF"
  },
  logo_container: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center"
  },
  button_container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  logo: {
      width: height_logo,
      height: height_logo
  }
});