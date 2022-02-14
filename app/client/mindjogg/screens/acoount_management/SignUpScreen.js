import React from "react";
import { Text, View, StyleSheet, Dimensions, Platform} from "react-native";
import { globalStyles } from "../../styles/global";

import * as Animatable from "react-native-animatable";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import TextBox from "../../components/Textbox/Textbox";
import StdButton from "../../components/StdButton/StdButton";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>header</Text>
        
      </View>
      <View style={styles.footer}>
        <TextBox 
        name="first_name"
        placeholder="First Name"
        height={Dimensions.get("window").height * 0.08}
        width={Dimensions.get("window").width - 50}
        required={true}
        icon={<Icon name="account" size={30} color="black" />}
        />
        <TextBox 
        name="first_name"
        placeholder="Last Name"
        height={Dimensions.get("window").height * 0.08}
        width={Dimensions.get("window").width - 50}
        required={true}
        icon={<Icon name="account" size={30} color="black" />}
        />
        <TextBox 
        name="email"
        placeholder="Email"
        height={Dimensions.get("window").height * 0.08}
        width={Dimensions.get("window").width - 50}
        required={true}
        icon={<Icon name="email" size={30} color="black" />}
        />
        <TextBox 
        name="email"
        placeholder="Email"
        height={Dimensions.get("window").height * 0.08}
        width={Dimensions.get("window").width - 50}
        required={true}
        icon={<Icon name="email" size={30} color="black" />}
        />
        <View style={styles.button}>
          <StdButton 
            text="Sign Up"
            buttonPress={() => {}}
          />
        </View>
        <View style={styles.signInButton}>
          <Text style={styles.text_footer}>Already have an account?</Text>
          <Text style={styles.text_signIn}>Sign In</Text>
        </View>
      </View>
    </View>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: globalStyles.pink.color,
  },
  header: {
      flex: 1,
      justifyContent: "flex-end",
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: Platform.OS === "ios" ? 3 : 3,
      backgroundColor: "#fff",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 30
  },
  text_footer: {
      color: globalStyles.purple.color,
      fontSize: 18,
      fontWeight: "bold",
  },
  text_signIn: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5
},
  action: {
      flexDirection: "row",
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#f2f2f2",
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === "ios" ? 0 : -12,
      paddingLeft: 10,
      color: "#05375a",
  },
  button: {
      alignItems: "center",
      marginTop: 15
  },
  signInButton: {
    alignItems: "center",
    marginTop: 15,
  },
  signIn: {
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: "bold"
  },
  textPrivate: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 20
  },
  color_textPrivate: {
      color: "grey"
  }
});
