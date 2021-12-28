import React, { useContext, useEffect, useState } from "react";
//import { Searchbar } from "react-native-paper";
 import { SearchBar } from "react-native-elements";
import { Feather } from '@expo/vector-icons';
import styled from "styled-components/native";
import { StyleSheet,Pressable, Text, View } from "react-native";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  flex-direction: row;
`;
const Search = ({ onDrowerToggle, Search, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  // useEffect(() => {
  //   setSearchTerm(keyword);
  // }, [keyword]);
  const textChanged = (txt) => {
    setSearchTerm(txt);
    onSearch(searchTerm);
  };
  return (
  
     <SearchBar
      placeholder="Search for a Collage"
      onChangeText={(text) => textChanged(text)}
      value={searchTerm}
      containerStyle={{ width: "90%",backgroundColor:"#ffffff",  borderBottomColor: 'transparent',
      borderTopColor: 'transparent'}}
      round
      inputStyle={{color:"#000000"}}
      onClear={()=>onSearch("")}
      lightTheme
      placeholderTextColor="#000000"
      inputContainerStyle={{}}
      searchIcon={()=><Pressable onPress={onDrowerToggle}><Feather name="menu" size={24} color="black" /></Pressable>}
    />
    
  );
};

export default Search;

const styles = StyleSheet.create({});


{
    
    
   {/* <Searchbar
        icon={"menu"}
        onIconPress={onDrowerToggle}
        placeholder="Search for a Collage"
        value={searchTerm}
        onSubmitEditing={() => onSearch(searchTerm)}
        onChangeText={(text) => textChanged(text)}
        style={{width:'90%'}}
        clearIcon={""}
      />  */}

}

