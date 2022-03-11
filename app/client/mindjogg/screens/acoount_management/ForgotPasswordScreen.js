/* REACT IMPORTS */
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
import * as Animatable from "react-native-animatable";
import Ionicon from "react-native-vector-icons/Ionicons";

/* THIRD PARTY IMPORTS */
import { Formik } from "formik";
import * as Yup from "yup";

/* LOCAL IMPORTS */
import { globalStyles } from "../../styles/global";
import StdButton from "../../components/StdButton/StdButton";

const validationSchema = Yup.object({
  email: Yup.string().required("Email or username is required!"),
});

const ForgotPasswordScreen = ({ navigation }) => {
  // input can be an email or a username
  const data = {
    input: "",
  };

  const forgetPasswordHandler = (input) => {
    //TODO: Connect to backend
    console.log(input)
  }

  return (
  <Formik
    initialValues={data}
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
      forgetPasswordHandler(values.email, values.password);
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
      const { input } = values;
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

              <Text style={styles.text_header_Title}>Forgot your password?</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View>
                <Text style={styles.text_footer}>
                  Enter your email or username
                </Text>
                <View style={styles.action}>
                  <Ionicon name="person-outline" color="#000000" size={20} />
                  <TextInput
                    placeholder="Email Or Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                  />
                </View>
                <View style={{ marginTop: 25 }}>
                  <Text style={styles.text_footer_message}>
                    * We will send you the instructions to reset your password to
                    your registered email
                  </Text>
                </View>
                <View style={styles.button}>
                  <StdButton text="Submit" buttonPress={() => {}} />
                </View>
                <View style={styles.cancelButton}>
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ marginTop: 15 }}
                  >
                    <Text style={styles.text_hightlight}>Cancel</Text>
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
  );};

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
  text_footer_message: {
    color: "#683795",
    fontSize: 12,
  },
  action: {
    flexDirection: "row",
    marginTop: 20,
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
  cancelButton: {
    alignItems: "center",
    marginTop: 15,
  },
});

export default ForgotPasswordScreen;
