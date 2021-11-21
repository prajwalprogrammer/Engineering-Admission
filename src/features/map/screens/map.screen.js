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
  const [collageList, setCollageList] = useState(restaurants);
  const [searchTerm, setSearchTerm] = useState("");
  const searchCollage = (term) => {
    setSearchTerm(term)
    console.log(term);
    setCollageList(
      restaurants.filter((clg) => {
        return clg.name.toLowerCase().includes(term.toLowerCase());
      })
    );
  };
  useEffect(() => {
    setCollageList(restaurants);
  }, [restaurants]);
  return (
    <>
      <Search
        Search={searchTerm}
        onSearch={(txt) => searchCollage(txt)}
      />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.2,
          longitudeDelta: 0.02,
        }}
      >
        {collageList.map((restaurant) => {
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
