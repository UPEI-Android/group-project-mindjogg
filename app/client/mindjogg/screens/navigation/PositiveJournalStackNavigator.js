import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { globalStyles } from "../../styles/global";
import Icon from "react-native-vector-icons/Ionicons";

// import PositiveJournalMainScreen, PositiveJournalEditScreen from the positive_journal folder
import PositiveJournalMainScreen from "../positive_journal/PositiveJournalMainScreen";
import PositiveJournalEditScreen from "../positive_journal/PositiveJournalEditScreen";
import PositiveJournalDetailScreen from "../positive_journal/PositiveJournalDetailScreen";
import PositiveJournalEditModifyScreen from "../positive_journal/PositiveJournalEditModifyScreen";

const Stack = createNativeStackNavigator();

const PositiveJournalStackNavigator = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <Stack.Navigator
        initialRouteName="EmergencySupportMainScreen"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: [globalStyles.purpleBackground],
          headerTintColor: "white",
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen
          name="PositiveJournalMainScreen"
          component={PositiveJournalMainScreen}
          options={{
            title: "Positive Journal",
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
          name="PositiveJournalDetailScreen"
          component={PositiveJournalDetailScreen}
          options={{
            title: "Positive Journal details",
            headerLeft: () => (
              <Icon.Button
                name="arrow-back-outline"
                size={25}
                style={globalStyles.purpleBackground}
                onPress={() => {
                  const title= Math.random().toString(36).substring(2,7);
                  navigation.navigate("PositiveJournalMainScreen",title);
                }}
              ></Icon.Button>
            ),
          }}
        />
                <Stack.Screen
          name="PositiveJournalEditModifyScreen"
          component={PositiveJournalEditModifyScreen}
          options={{
            title: "Positive Journal Modify",
            headerLeft: () => (
              <Icon.Button
                name="arrow-back-outline"
                size={25}
                style={globalStyles.purpleBackground}
                onPress={() => {
                  const title= Math.random().toString(36).substring(2,7);
                  navigation.navigate("PositiveJournalMainScreen",title);
                }}
              ></Icon.Button>
            ),
          }}
        />

        <Stack.Screen
          name="PositiveJournalEditScreen"
          component={PositiveJournalEditScreen}
          options={{
            title: "Positive Journal add entry",
            headerLeft: () => (
              <Icon.Button
                name="arrow-back-outline"
                size={25}
                style={globalStyles.purpleBackground}
                onPress={() => {
                  const title= Math.random().toString(36).substring(2,7);
                  navigation.navigate("PositiveJournalMainScreen",title);
                }}
              ></Icon.Button>
            ),
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default PositiveJournalStackNavigator;
