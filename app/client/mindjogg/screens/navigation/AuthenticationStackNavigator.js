import React from "react";
import {View} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


// import SignInScreen and SingUpScreen from the account_management folder
import SplashScreen from "../acoount_management/SplashScreen";
import SignInScreen from "../acoount_management/SignInScreen";
import SignUpScreen from "../acoount_management/SignUpScreen";

const Stack = createNativeStackNavigator();

const AccountManagementStackNavigator = () => {
  return (

    <View style={{ flex: 1 }} collapsable={false}>
    <Stack.Navigator initialRouteName="SplashScreen"
    screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#7d7bb6",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        headerShown: false,
      }}
    >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
    </View>
  );
};

export default AccountManagementStackNavigator;