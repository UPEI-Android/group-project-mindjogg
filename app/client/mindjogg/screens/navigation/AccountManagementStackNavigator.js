import React from "react";
import {View} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import SignInScreen and SingUpScreen from the account_management folder
import SignInScreen from "../acoount_management/SignInScreen";
import SignUpScreen from "../acoount_management/SignUpScreen";

const Stack = createNativeStackNavigator();

const AccountManagementStackNavigator = () => {
  return (

    <View style={{ flex: 1 }} collapsable={false}>
    <Stack.Navigator initialRouteName="SignIn"
    screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
    </View>
  );
}

export default AccountManagementStackNavigator;