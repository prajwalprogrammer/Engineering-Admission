import React, { useContext,useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { FavouriteContext } from "../../services/favourite/favourite.context";
import ResturantsInfoCard from "../../features/resturants/components/resturants-info-card.component";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "../../components/typography/text.component";
import styled from "styled-components";
import {  ref, getDownloadURL } from "firebase/storage";

import CollageInfoCard from "../resturants/components/CollageInfoCard";
import { Appbar } from "react-native-paper";
import { storage } from "../../../App";
const Safearea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
const FavouriteScreen = ({ navigation }) => {
  useEffect(() => {
    
    getDownloadURL(ref(storage, 'dsccutoff1/1101_4.pdf'))
      .then((url) => {
        console.log(url)
      })
      .catch((error) => {
        // Handle any errors
        console.log(error)
      });},[])
  const { favourites } = useContext(FavouriteContext);
  if (!favourites.length) {
    return (
      <Safearea>
        <Text>No Favourites Yet</Text>
      </Safearea>
    );
  }
  return (
    <SafeArea>
      <Appbar.Header style={{height:30,backgroundColor:"#F1F1F1"}}>
        <Appbar.BackAction onPress={()=>navigation.goBack()} style={{marginTop:-12}} />
        <Appbar.Content title="Favourites" color="black" style={{marginTop:-22}} />
       </Appbar.Header>
      <FlatList
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {}}>
            <CollageInfoCard resturant={item} />
          </TouchableOpacity>
        )}
        data={favourites}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

export default FavouriteScreen;
