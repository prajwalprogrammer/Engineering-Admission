import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { View, Text } from "react-native";
import ResturantsScreen from "../../features/resturants/screens/resturants.screen";
import RestaurantNavigator from "./restaurant.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Button } from "react-native-paper";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

import SettingsScreen from "../../features/settings/settings.screen";
import SettingNavigator from "./settingNavigator";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Collage: "ios-school",
  Map: "md-map",
  Settings: "md-settings",
};
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
const AppNavigation = () => {
  return (
    
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Collage" component={RestaurantNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            {/* <Tab.Screen name="Settings" component={SettingNavigator} /> */}
          </Tab.Navigator>
        
  );
};

export default AppNavigation;
