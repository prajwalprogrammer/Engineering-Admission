import React from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Compactrestaurant from "../restaurant/compact-retaurant-info";
import { Spacer } from "../spacer/spacer.component";
const FavouriteWrapper = styled.View`
  padding: 10px;
`;
const Name = styled(Text)`
font-family:${(props) => props.theme.fonts.body}
font-size:${(props) => props.theme.fontSizes.caption}

`;
const FavouriteBar = ({ favourites, onNavigate }) => {
  return (
    <FavouriteWrapper>
       <Name>favourites</Name>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((favourite) => {
          const key = favourite.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("ResturantDetails", { restaurant: favourite })
                }
              >
                <Compactrestaurant restaurant={favourite} isMap={false} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouriteWrapper>
  );
};

export default FavouriteBar;
