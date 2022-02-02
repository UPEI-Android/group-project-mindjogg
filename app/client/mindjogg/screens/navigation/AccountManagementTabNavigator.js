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
       
        activeColor="#e91e63"
        barStyle={{ backgroundColor: "tomato" }}
      >
        <Tab.Screen
          name="Feed"
          component={AccountManagementStackNavigator}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={EmergencySupportStackNavigator}
          options={{
            tabBarLabel: "Updates",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={PositviJournalStackNavigator}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Goals"
          component={SmartGoalStackNavigator}
          options={{
            tabBarLabel: "Smart Goals",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
}

export default AccountManagementTabNavigator;