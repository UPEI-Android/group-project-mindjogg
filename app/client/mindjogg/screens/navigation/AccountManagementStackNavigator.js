import React from "react";
import {View} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Icon from "react-native-vector-icons/Ionicons";

// import SignInScreen and SingUpScreen from the account_management folder
import ProfileScreen from "../acoount_management/ProfileScreen";
import AddNewScheduleItem from "../acoount_management/AddNewScheduleItem";

import EditProfileScreen from "../acoount_management/EditProfileScreen";
import { globalStyles } from "../../styles/global";
import ForgotPasswordScreen from "../acoount_management/ForgotPasswordScreen";
import PersonalInfomation from "../acoount_management/PersonalInfomation";
import ContactInformation from "../acoount_management/ContactInformation";

const Stack = createNativeStackNavigator();

const AccountManagementStackNavigator = ({navigation}) => {
  return (

    <View style={{ flex: 1 }} collapsable={false}>
    <Stack.Navigator initialRouteName="SignIn"
    screenOptions={{
        headerTitleAlign: "center",
        headerStyle:[ globalStyles.purpleBackground],
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
        <Stack.Screen name="YourProfile" component={ProfileScreen}  options = {
          {
            title: "Your schedule",
            headerLeft: () => (
              <Icon.Button name="menu" size={25} style={globalStyles.purpleBackground} onPress={() => {navigation.openDrawer()}}></Icon.Button>
            ),
            headerRight: () => (
              <Icon.Button name="person-circle-outline" size={25} style={globalStyles.purpleBackground} onPress={() => { navigation.navigate("EditProfile")}}></Icon.Button>
            )
            
          }
        }/>
        <Stack.Screen name="EditProfile" component={EditProfileScreen} options = {
          {
            title: "Edit Profile",
            headerLeft: () => (
              <Icon.Button
                name="arrow-back-outline"
                size={25}
                style={globalStyles.purpleBackground}
                onPress={() => {
                  const title= Math.random().toString(36).substring(2,7);
                  navigation.navigate("YourProfile",title);
                }}
              ></Icon.Button>
            ),
          }
        }/>
        <Stack.Screen name="PersonalInfomation" component={PersonalInfomation} options = {
          {
            title: "Edit Personal info",
            headerLeft: () => (
              <Icon.Button
                name="arrow-back-outline"
                size={25}
                style={globalStyles.purpleBackground}
                onPress={() => {
                  const title= Math.random().toString(36).substring(2,7);
                  navigation.navigate("EditProfile",title);
                }}
              ></Icon.Button>
            ),
          }
        }/>

<Stack.Screen name="ContactInformation" component={ContactInformation} options = {
          {
            title: "Edit Contact info",
            headerLeft: () => (
              <Icon.Button
                name="arrow-back-outline"
                size={25}
                style={globalStyles.purpleBackground}
                onPress={() => {
                  const title= Math.random().toString(36).substring(2,7);
                  navigation.navigate("EditProfile",title);
                }}
              ></Icon.Button>
            ),
          }
        }/>


        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />

        <Stack.Screen name="AddNewScheduleItem" component={AddNewScheduleItem} options = {
          {
            title: "Add Event",
          }
        }/>
    </Stack.Navigator>
    </View>
  );
}

export default AccountManagementStackNavigator;