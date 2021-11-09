import React, { useContext } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import ResturantsInfoCard from "../components/resturants-info-card.component";
import styled from "styled-components/native";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";
import {ActivityIndicator,Colors} from 'react-native-paper'
import Search from "../components/search.component";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Constants.statusBarHeight}px;
`;

const ResturantContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
const Loading = styled(ActivityIndicator)`
  marginLeft:-25px
`;
const LoadingContainer = styled(View)`
position:absolute;
top:50%;
left:50%;
`;
const ResturantsScreen = () => {
  const { restaurants, isLoading, iserror } = useContext(RestaurantContext);
  return (
    <SafeArea>
      {isLoading&&<LoadingContainer>
        <Loading size={50}  animating={true} color={Colors.blue300} />
        </LoadingContainer>}
      <Search />
      <FlatList
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => 
          <ResturantsInfoCard resturant={item} />
        }
        data={restaurants}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

export default ResturantsScreen;
