import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
// import CartScreen, { Notifications } from '../screens/CartScreen';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: "home-account"
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: "bell-outline"
        }}
      />
      {/* <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: "message-text-outline"
        }}
      /> */}
    </Tab.Navigator>
  );
}
