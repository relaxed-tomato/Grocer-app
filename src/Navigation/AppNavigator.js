import React, { Fragment } from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerContent from "../Navigation/DrawerContent";
import BottomTabs from "../Navigation/BottomTabs";

function AppNavigator() {
  return (
    <SafeAreaProvider>
      <DrawerContent />
      <BottomTabs />
    </SafeAreaProvider>
  );
}

export default AppNavigator;
