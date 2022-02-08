import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import AccountManagementStackNavigator from "./AccountManagementStackNavigator";
import EmergencySupportStackNavigator from "./EmergencySupportStackNavigator";
import PositviJournalStackNavigator from "./PositiveJournalStackNavigator";
import SmartGoalStackNavigator from "./SmartGoalStackNavigator";

const Tab = createMaterialBottomTabNavigator();

const AccountManagementTabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="Profile"
        activeColor="#734f96"
        barStyle={{ backgroundColor: "white" }}
      >
        <Tab.Screen
          name="Profile"
          component={AccountManagementStackNavigator}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Support"
          component={EmergencySupportStackNavigator}
          options={{
            tabBarLabel: "Support",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="charity" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Journal"
          component={PositviJournalStackNavigator}
          options={{
            tabBarLabel: "Journal",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="notebook" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Goals"
          component={SmartGoalStackNavigator}
          options={{
            tabBarLabel: "Smart Goals",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="target" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
}

export default AccountManagementTabNavigator;