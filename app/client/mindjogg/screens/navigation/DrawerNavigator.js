import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent from "./DrawerContent";

import AccountManagementTabNavigator from "./AccountManagementTabNavigator";
import EmergencySupportTabNavigator from "./EmergencySupportTabNavigator";
import PositiveJournalTabNavigator from "./PositiveJournalTabNavigator";
import SmartGoalTabNavigator from "./SmartGoalTabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="AccountManagement" component={AccountManagementTabNavigator} />
            <Drawer.Screen name="EmergencySupport" component={EmergencySupportTabNavigator} />
            <Drawer.Screen name="PositiveJournal" component={PositiveJournalTabNavigator} />
            <Drawer.Screen name="SmartGoal" component={SmartGoalTabNavigator} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;