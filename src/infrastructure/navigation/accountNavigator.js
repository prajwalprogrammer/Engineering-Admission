import React from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import AccountScreen from "../../features/account/screen/account.screen";
import LoginScreen from "../../features/account/screen/login.screen";
import Ragister from "../../features/account/screen/register.screen";
const Stack = createStackNavigator();
const AccountNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Stack.Screen name="account" component={AccountScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="ragister" component={Ragister} />
    </Stack.Navigator>
  );
};

export default AccountNavigation;
