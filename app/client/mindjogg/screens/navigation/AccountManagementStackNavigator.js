import React from "react";
import {View} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Icon from "react-native-vector-icons/Ionicons";

// import SignInScreen and SingUpScreen from the account_management folder
import SignInScreen from "../acoount_management/SignInScreen";
import SignUpScreen from "../acoount_management/SignUpScreen";

const Stack = createNativeStackNavigator();

const AccountManagementStackNavigator = ({navigation}) => {
  return (

    <View style={{ flex: 1 }} collapsable={false}>
    <Stack.Navigator initialRouteName="SignIn"
    screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#7d7bb6",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
        <Stack.Screen name="SignIn" component={SignInScreen}  options = {
          {
            title: "Sign In",
            headerLeft: () => (
              <Icon.Button name="menu" size={25} backgroundColor="#7d7bb6" onPress={() => {navigation.openDrawer()}}></Icon.Button>
            )
          }
        }/>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
    </View>
  );
}

export default AccountManagementStackNavigator;