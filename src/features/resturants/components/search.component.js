import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";
import { LocationContext } from "../../../services/location/location.context";
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const Search = () => {
  const { search, keyword } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState(keyword);
 
  return (
    <SearchContainer>
      <Searchbar
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
