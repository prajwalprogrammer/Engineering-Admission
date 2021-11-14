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
import {
  FavouriteContext,
  FavouriteContextProvider,
} from "../../services/favourite/favourite.context";
import {
  LocationContext,
  LocationContextProvider,
} from "../../services/location/location.context";
import { RestaurantContextProvider } from "../../services/restaurant/restaurant.context";
import SettingsScreen from "../../features/settings/settings.screen";
import SettingNavigator from "./settingNavigator";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Resturant: "md-restaurant",
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
    <FavouriteContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Resturant" component={RestaurantNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingNavigator} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouriteContextProvider>
  );
};

export default AppNavigation;
