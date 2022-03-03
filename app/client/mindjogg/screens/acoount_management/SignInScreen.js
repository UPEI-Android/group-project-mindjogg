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

import { AuthContext } from "../../components/conext/authenticationContext";

const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    secureTextEntry: true,
  });

  const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
      });
    } else {
      setData({
        ...data,
        email: val,
      });
    }
  };

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

  const signInhandler = (userName, password) => {
    signIn(userName, password);
  };

  return (
    <View style={[styles.container, globalStyles.pinkBackground]}>
      <StatusBar backgroundColor="#FFE3FF" barStyle="dark-content" />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.header}>
          <View style={styles.logo_container}>
            <Animatable.Image
              animation="bounceIn"
              duration={1500}
              source={require("../../assets/Getting_started_logo.png")}
              style={styles.logo}
              resizeMode="stretch"
            />
            <Text style={styles.text_header}>Welcome Back</Text>
            <Text style={styles.text_header_Title}>
              Please Sign In to Continue
            </Text>
          </View>
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
                  placeholder="Email Or Username"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={(val) => textInputChange(val)}
                />
              </View>
              <View style={{ marginTop: 30 }}>
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
                <StdButton
                  text="Sign In"
                  buttonPress={() => {
                    signInhandler(data.email, data.password);
                  }}
                />
              </View>

              <View style={styles.signUpButton}>
                <TouchableOpacity
                  onPress={() => navigation.push("ForgotPasswordScreen")}
                  style={{ marginBottom: 15 }}
                >
                  <Text style={styles.text_hightlight}>Forgot Password?</Text>
                </TouchableOpacity>
                <Text style={styles.text_footer}>Not a Member?</Text>
                <TouchableOpacity
                  onPress={() => navigation.push("SignUpScreen")}
                >
                  <Text style={styles.text_hightlight}>Sign up</Text>
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
const height_logo = height * 0.17;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  logo_container: {
    alignItems: "center",
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  footer: {
    flex: 1.5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#977AB7",
    fontWeight: "bold",
    fontSize: 15,
  },
  text_header_Title: {
    color: "#683795",
    fontWeight: "bold",
    fontSize: 20,
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
    marginTop: 50,
  },
  signUpButton: {
    alignItems: "center",
    marginTop: 15,
  },
});

export default SignInScreen;
