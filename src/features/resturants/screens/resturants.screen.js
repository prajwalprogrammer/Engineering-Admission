import React, { useContext, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import ResturantsInfoCard from "../components/resturants-info-card.component";
import styled from "styled-components/native";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import Search from "../components/search.component";
import FavouriteBar from "../../../components/favourite/favouritebar.component";
import { FavouriteContext } from "../../../services/favourite/favourite.context";
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
const ResturantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, iserror } = useContext(RestaurantContext);
  const {favourites} = useContext(FavouriteContext)
  const [onToggled, setOnToggled] = useState(false);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search isFavouriteToggle={onToggled} onFavouriteToggle={() => setOnToggled(!onToggled)} />
      {onToggled && <FavouriteBar favourites={favourites} onNavigate={navigation.navigate} />}
      
      <FlatList
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ResturantDetails", { restaurant: item })
            }
          >
            <ResturantsInfoCard resturant={item} />
          </TouchableOpacity>
        )}
        data={restaurants}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

export default ResturantsScreen;
