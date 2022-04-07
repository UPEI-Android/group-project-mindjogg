import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { globalStyles } from "../../styles/global";
import Icon from "react-native-vector-icons/Ionicons";

import MoodTrackerMainScreen from "../mood_tracker/MoodTrackerMainScreen";
import MoodHistoryScreen from "../mood_tracker/MoodHistoryScreen";
import MoodEditScreen from "../mood_tracker/MoodEditScreen";

const Stack = createNativeStackNavigator();

const MoodTrackerStackNavigator = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <Stack.Navigator
        initialRouteName="MoodTrackerMainScreen"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: [globalStyles.purpleBackground],
          headerTintColor: "white",
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen
          name="MoodTrackerMainScreen"
          component={MoodTrackerMainScreen}
          options={{
            title: "Mood Tracker",
            headerLeft: () => (
              <Icon.Button
                name="menu"
                size={25}
                style={globalStyles.purpleBackground}
                onPress={() => {
                  navigation.openDrawer();
                }}
              ></Icon.Button>
            ),
            headerRight: () => (
              <Icon.Button name="person-circle-outline" size={25} style={globalStyles.purpleBackground} onPress={() => { navigation.navigate("EditProfile")}}></Icon.Button>
            )
          }}
        />
        <Stack.Screen
          name="MoodHistoryScreen"
          component={MoodHistoryScreen}
          options={{
            title: "Mood History Overview",
          }}
        />
        <Stack.Screen
          name="MoodEditScreen"
          component={MoodEditScreen}
          options={{
            title: "Mood History",
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default MoodTrackerStackNavigator;
