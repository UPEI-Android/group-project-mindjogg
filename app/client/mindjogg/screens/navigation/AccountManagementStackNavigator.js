import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import SignInScreen and SingUpScreen from the account_management folder
import SignInScreen from "../acoount_management/SignInScreen";
import SignUpScreen from "../acoount_management/SignUpScreen";

const Stack = createNativeStackNavigator();

const AccountManagementStackNavigator = () => {
  return (

    <Stack.Navigator initialRouteName="SignIn"
    screenOptions={{
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
  );
}

export default AccountManagementStackNavigator;