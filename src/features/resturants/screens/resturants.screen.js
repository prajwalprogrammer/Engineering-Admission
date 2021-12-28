import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import Constants from "expo-constants";
import { useFocusEffect } from "@react-navigation/core";
import { FontAwesome } from '@expo/vector-icons';
import ResturantsInfoCard from "../components/resturants-info-card.component";
import styled from "styled-components/native";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import Search from "../components/search.component";
import FavouriteBar from "../../../components/favourite/favouritebar.component";
import { FavouriteContext } from "../../../services/favourite/favourite.context";
import FadeInView from "../../../components/animations/fade.animation";
import CollageInfoCard from "../components/CollageInfoCard";
import SearchShortcutBar from "../../../components/searchShortcut/SearchBar.component";
import { Text } from "../../../components/typography/text.component";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Constants.statusBarHeight}px;
`;

const ResturantContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
  flex-Direction:row;

`;
const ResturantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, iserror } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouriteContext);
  const [onToggled, setOnToggled] = useState(false);
  const [collageList, setCollageList] = useState(restaurants);
  const [searchTerm, setSearchTerm] = useState("");
  const searchCollage = (term) => {
    // alert(term);
    // if (term === "") {
    //   alert("Please select")
    //   setCollageList(restaurants);
    // }
    setSearchTerm(term)
    setCollageList(
      restaurants.filter((clg) => {
        // if(typeof clg === "string"){
         return clg.name.toLowerCase().includes(term.toLowerCase());
        // }else{
        //    return (clg.dteCode+'').indexOf(term+'') > -1;
        // }
      })
    );
  };
  // useEffect(() => {
  //   setCollageList(restaurants);
  // }, [restaurants]);
  useFocusEffect(
    React.useCallback(() => {
      // Your code here
      setCollageList(restaurants);
    }, [restaurants]))
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchContainer style={{flexDirection:'row'}}>
      <Search
        onDrowerToggle={() => navigation.openDrawer()}
        Search={searchTerm}
        onSearch={(txt) => searchCollage(txt)}
      />
      <FontAwesome name={onToggled ?"heart":"heart-o"} onPress={() => setOnToggled(!onToggled)} size={26} color={onToggled ?"red":"black"} style={{paddingTop:20,paddingLeft:12}} />
      </SearchContainer>
      <SearchShortcutBar />
      {onToggled && (
        <FavouriteBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      <FlatList
        keyExtractor={(item) => item.name}
        ListEmptyComponent={()=>!isLoading && <View style={{justifyContent:'center',alignItems:'center'}}><Text variant="error">Collage Not Found</Text></View>}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ResturantDetails", { restaurant: item })
            }
          >
            <FadeInView>
              <CollageInfoCard resturant={item} />
            </FadeInView>
          </TouchableOpacity>
        )}
        data={collageList}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

export default ResturantsScreen;
