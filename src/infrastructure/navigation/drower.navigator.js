import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import AppNavigation from "./app.navigator";
import { DrawerContent } from "./DrowerContent";
import LoadPDF from "../../features/resturants/components/loadPDF";
import FavouriteScreen from "../../features/settings/favourite.screen";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen name="Home" component={AppNavigation} />
            <Drawer.Screen  name="pdf" component={LoadPDF} options={{unmountOnBlur:true}} />
            <Drawer.Screen  name="favourites" component={FavouriteScreen} />

          </Drawer.Navigator>
      
  );
};

export default DrawerNavigator;
