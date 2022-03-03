import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";

import { globalStyles } from "../../styles/global";

import * as Animatable from "react-native-animatable";
import StdButton from "../../components/StdButton/StdButton";

import Ionicon from "react-native-vector-icons/Ionicons";

const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={[styles.container, globalStyles.pinkBackground]}>
      <StatusBar backgroundColor="#FFE3FF" barStyle="dark-content" />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.header}>
          <Text style={styles.text_header_Title}>
            Create an account to continue
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <View style={styles.action}>
                <Ionicon name="person-outline" color="#000000" size={20} />
                <TextInput
                  placeholder="First Name"
                  style={styles.textInput}
                  autoCapitalize="none"
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <View style={styles.action}>
                  <Ionicon name="person-outline" color="#000000" size={20} />
                  <TextInput
                    placeholder="Last Name"
                    style={styles.textInput}
                    autoCapitalize="none"
                  />
                </View>
              </View>
              <View style={{ marginTop: 20 }}>
                <View style={styles.action}>
                  <Ionicon name="at-outline" color="#000000" size={20} />
                  <TextInput
                    placeholder="Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                  />
                </View>
              </View>
              <View style={{ marginTop: 20 }}>
                <View style={styles.action}>
                  <Ionicon name="mail-outline" color="#000000" size={20} />
                  <TextInput
                    placeholder="Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                  />
                </View>
              </View>
              <View style={{ marginTop: 20 }}>
                <View style={styles.action}>
                  <Ionicon
                    name="lock-closed-outline"
                    color="#000000"
                    size={20}
                  />
                  <TextInput
                    placeholder="Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                  />
                  <TouchableOpacity onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ? (
                      <Ionicon name="eye-off-outline" color="grey" size={20} />
                    ) : (
                      <Ionicon name="eye-outline" color="grey" size={20} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.button}>
                <StdButton text="Sign Up" buttonPress={() => {}} />
              </View>

              <View style={styles.signUpButton}>
                <Text style={styles.text_footer}>Already a Member?</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={styles.text_hightlight}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Animatable.View>
    </View>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.14;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  logo_container: {
    alignItems: "center",
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#977AB7",
    fontWeight: "bold",
    fontSize: 12,
  },
  text_header_Title: {
    color: "#683795",
    fontWeight: "bold",
    fontSize: 28,
    marginTop: 10,
  },
  text_footer: {
    color: "#683795",
    fontSize: 15,
  },
  text_hightlight: {
    color: "red",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 5,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 45,
  },
  signUpButton: {
    alignItems: "center",
    marginTop: 15,
  },
});

export default SignInScreen;
