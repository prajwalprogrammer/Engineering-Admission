import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  flex-direction: row;
`;
const Search = ({  onDrowerToggle, Search, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  // useEffect(() => {
  //   setSearchTerm(keyword);
  // }, [keyword]);

  return (
    <>
      <Searchbar
        icon={"menu"}
        onIconPress={onDrowerToggle}
        placeholder="Search for a Collage"
        value={searchTerm}
        onSubmitEditing={() => onSearch(searchTerm)}
        onChangeText={(text) => setSearchTerm(text)}
        style={{width:'90%'}}
      />
    </>
  );
};

export default Search;

const styles = StyleSheet.create({});
