import React from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  CardStyleInterpolators
} from "@react-navigation/stack";
import SettingsScreen from "../../features/settings/settings.screen";
import FavouriteScreen from "../../features/settings/favourite.screen";
const Stack = createStackNavigator();
const SettingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
          headerMode:"screen",
        cardStyleInterpolators:CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen options={{headerShown:false}} name="Setting" component={SettingsScreen} />
      <Stack.Screen name="favourites" component={FavouriteScreen} />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
