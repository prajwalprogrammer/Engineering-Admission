import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import Search from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";
import Mapcallout from "../../resturants/components/map-callout.component";
const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState(0);
  const {  lat, lng } = location;
  useEffect(() => {
    // const northeast = viewport.northeast.lat;
    // const southeast = viewport.southwest.lat;

    // setLatDelta(northeast - southeast);
  }, [location]);
  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.2,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("ResturantDetails", { restaurant })
                }
              >
                <Mapcallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
