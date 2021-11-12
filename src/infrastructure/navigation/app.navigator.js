import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { View, Text } from 'react-native'
import ResturantsScreen from '../../features/resturants/screens/resturants.screen'
import RestaurantNavigator from './restaurant.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
const Tab = createBottomTabNavigator();
const Setting = () => <Text>Setting</Text>;
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
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Resturant" component={RestaurantNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={Setting} />
          </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation
