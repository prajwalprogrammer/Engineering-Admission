import React, { useContext } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { FavouriteContext } from "../../services/favourite/favourite.context";
import ResturantsInfoCard from "../../features/resturants/components/resturants-info-card.component";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "../../components/typography/text.component";
import styled from "styled-components";
const Safearea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
const FavouriteScreen = ({ navigation }) => {
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
      data={favourites}
      contentContainerStyle={{ padding: 16 }}
    />
    </SafeArea>
  );
};

export default FavouriteScreen;
