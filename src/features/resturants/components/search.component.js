import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";
import { LocationContext } from "../../../services/location/location.context";
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const Search = ({isFavouriteToggle,onFavouriteToggle}) => {
  const { search, keyword } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState(keyword);
  useEffect(() => {
    setSearchTerm(keyword)
 }, [keyword])
  return (
    <SearchContainer>
      <Searchbar
      icon={isFavouriteToggle?"heart":"heart-outline"}
      onIconPress={onFavouriteToggle}
      placeholder="Search for a location"
        value={searchTerm}
        onSubmitEditing={() => search(searchTerm)}
        onChangeText={(text) => setSearchTerm(text)}
      />
    </SearchContainer>
  );
};

export default Search;

const styles = StyleSheet.create({});
