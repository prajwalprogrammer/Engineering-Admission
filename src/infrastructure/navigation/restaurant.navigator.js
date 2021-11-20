import React from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import ResturantsScreen from "../../features/resturants/screens/resturants.screen";
import RestuarantDetails from "../../features/resturants/screens/restaurant-details.screen";
import LoadPDF from "../../features/resturants/components/loadPDF";

const RestaurantStack = createStackNavigator();
const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen name="Resturant" component={ResturantsScreen} />
      <RestaurantStack.Screen
        options={{ ...TransitionPresets.ModalPresentationIOS }}
        name="ResturantDetails"
        component={RestuarantDetails}
      />
      <RestaurantStack.Screen name="pdf" component={LoadPDF} />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantNavigator;
