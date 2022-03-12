import { React, useContext, useState } from "react";
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

import { Formik } from "formik";
import * as Yup from "yup";

import { AuthContext } from "../../components/conext/authenticationContext";

const validationSchema = Yup.object({
  email: Yup.string().required("Email or username is required!"),
  password: Yup.string()
    .trim()
    .min(8, "Password must be atleast 8 character!")
    .max(16, "Password must be atmost 16 character!")
    .required("Password is required!"),
});

const SignInScreen = ({ navigation }) => {
  const data = {
    email: "",
    password: "",
  };

  const [secureText, setSecureText] = useState({
    secureTextEntry: true,
  });

  const { signIn } = useContext(AuthContext);

  const updateSecureTextEntry = () => {
    setSecureText({
      ...secureText,
      secureTextEntry: !secureText.secureTextEntry,
    });
  };

  // a state to track whether there is no account for the given username/password
  const [accountFound, setAccountFound] = useState(true);

  const signInhandler = (userName, password) => {
    signIn(userName, password).then((status) => {
      if (status !== 200) {
        setAccountFound(false);
      }
    });
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        signInhandler(values.email, values.password);
        actions.resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        setFieldTouched,
        handleChange,
        handleSubmit,
      }) => {
        const { email, password } = values;
        return (
          <>
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
                        <Ionicon
                          name="person-outline"
                          color="#000000"
                          size={20}
                        />
                        <TextInput
                          placeholder="Email Or Username"
                          value={email}
                          style={styles.textInput}
                          autoCapitalize="none"
                          onChangeText={() => {handleChange("email"); setAccountFound(true)}}
                          onFocus={() => setFieldTouched("email")}
                        />
                      </View>
                      {touched.email && errors.email ? (
                        <Text style={{ color: "red", marginTop: 5 }}>
                          {errors.email}
                        </Text>
                      ) : null}

                      <View style={{ marginTop: 30 }}>
                        <View style={styles.action}>
                          <Ionicon
                            name="lock-closed-outline"
                            color="#000000"
                            size={20}
                          />
                          <TextInput
                            placeholder="Password"
                            value={password}
                            secureTextEntry={
                              secureText.secureTextEntry ? true : false
                            }
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={() => {handleChange("password"); setAccountFound(true)}}
                            onFocus={() => setFieldTouched("password")}
                          />
                          <TouchableOpacity onPress={updateSecureTextEntry}>
                            {secureText.secureTextEntry ? (
                              <Ionicon
                                name="eye-off-outline"
                                color="grey"
                                size={20}
                              />
                            ) : (
                              <Ionicon
                                name="eye-outline"
                                color="grey"
                                size={20}
                              />
                            )}
                          </TouchableOpacity>                
                        </View>
                      </View>
                      {touched.password && errors.password ? (
                        <Text style={{ color: "red", marginTop: 5 }}>
                          {errors.password}
                        </Text>
                      ) : null}

                        <Text style={styles.text_header}>{accountFound ? "" : "Username or password is incorrect"}</Text>

                      <View style={styles.button}>
                        <StdButton text="Sign In" buttonPress={handleSubmit} />
                      </View>

                      <View style={styles.signUpButton}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.push("ForgotPasswordScreen")
                          }
                          style={{ marginBottom: 15 }}
                        >
                          <Text style={styles.text_hightlight}>
                            Forgot Password?
                          </Text>
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
          </>
        );
      }}
    </Formik>
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
