import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const Search = ({ isFavouriteToggle, onFavouriteToggle ,Search,onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { restaurants,setRestaurants } = useContext(RestaurantContext);
  // useEffect(() => {
  //   setSearchTerm(keyword);
  // }, [keyword]);
  
  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouriteToggle ? "heart" : "heart-outline"}
        onIconPress={onFavouriteToggle}
        placeholder="Search for a Collage"
        value={searchTerm}
        onSubmitEditing={() => onSearch(searchTerm)}
        onChangeText={(text) => setSearchTerm(text)}
      />
    </SearchContainer>
  );
};

export default Search;

const styles = StyleSheet.create({});
