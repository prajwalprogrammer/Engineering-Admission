import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import React, { useContext, useEffect, useRef, useState } from "react";
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
  const [latDelta, setLatDelta] = useState(0.6);
  const { lat, lng } = location;
  const mark = useRef(0);
  const [collageList, setCollageList] = useState(restaurants);
  const [searchTerm, setSearchTerm] = useState("");
  const searchCollage = (term) => {
    setSearchTerm(term);
   
    setCollageList(
      restaurants.filter((clg) => {
        return clg.name.toLowerCase().includes(term.toLowerCase());
      })
    );
  };
  useEffect(() => {
    setCollageList(restaurants);
    if (lat=="19.50312815658777" || lat=="19.50312815658779" || lat=="19.87667628941542") {
      setLatDelta(15)
    }
    else{
      setLatDelta(0.6)
    }
  }, [restaurants]);

  return (
    <>
      <Search Search={searchTerm} onSearch={(txt) => searchCollage(txt)} />
      <Map
        ref={(m) => (mark.current = m)}
        // initialCamera={{
        //   center: {
        //     latitude: lat,
        //     longitude: lng,
        //   },
        //   pitch: 25,
        //   heading: 0,
        //   altitude:100,
        //   zoom: 7,
        // }}
        onMapReady={() =>
          mark.current.fitToSuppliedMarkers(["0", "1", "2"], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
          })
        }
        // maxDelta={50}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.2,
        }}
      >
        {collageList.map((restaurant, index) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
              identifier={index.toString()}
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
