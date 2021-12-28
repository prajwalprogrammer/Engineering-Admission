import React, { useContext, useEffect, useState } from "react";
import { SearchBar } from "react-native-elements";
import styled from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import SearchShortcutBar from '../../../components/searchShortcut/SearchBar.component'
import { LocationContext } from "../../../services/location/location.context";
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
  position:absolute;
  z-index:999;
  top:40px;
  width:100%;
`;
const Search = ({Search,onSearch}) => {
  const { search, keyword } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState("");
  const textChanged = (txt) => {
    setSearchTerm(txt);
    onSearch(searchTerm);
  };
  return (
    <SearchContainer>
    <SearchBar
      placeholder="Search for a Collage"
      onChangeText={(text) => textChanged(text)}
      value={searchTerm}
      containerStyle={{ width: "95%",backgroundColor:"transparent",  borderBottomColor: 'transparent',
      borderTopColor: 'transparent'}}
      round
      inputStyle={{color:"#000000"}}
      onClear={()=>onSearch("")}
      lightTheme
      placeholderTextColor="#000000"
      searchIcon={()=><FontAwesome5 name="map-marked-alt" size={24} color="black" />}
    />
      <SearchShortcutBar />
    </SearchContainer>
  );
};

export default Search;

const styles = StyleSheet.create({});
