import React from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import ResturantsScreen from "../../features/resturants/screens/resturants.screen";
import RestuarantDetails from "../../features/resturants/screens/restaurant-details.screen";

const RestaurantStack = createStackNavigator();
const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen name="Resturant" component={ResturantsScreen} />
      <RestaurantStack.Screen
        name="ResturantDetails"
        component={RestuarantDetails}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantNavigator;
