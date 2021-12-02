import React from "react";
import styled from "styled-components/native";
import { StyleSheet, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  ResturantCard,
  ResturantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./resturant-info-card-style.js";
import { Favourite } from "../../../components/favourite/favourite.component";

const CollageInfoCard = (resturant) => {
  const {
    name = "Zomato",
    vicinity = "Walmiki Nagar,Latur",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    rating = 4,
    photos,
    placeId = 12,
    dteCode,
  } = resturant.resturant;
  const ratingArray =
    typeof rating == "string"
      ? rating
      : Array.from(new Array(Math.floor(rating)));
  return (
    <ResturantCard elevation={5}>
      <Favourite restaurant={resturant.resturant} />
    
      <ResturantCardCover elevation={15} style={{}} source={{ uri: icon }} />
      <Info>
        <Text varient="label">{name}</Text>

        <Section>
          {typeof rating == "string" ? (
            <Text variant="hint">{ratingArray}</Text>
          ) : (
            <Rating>
              {ratingArray.map((_, i) => (
                <SvgXml
                  key={`star-${placeId}-${i}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ))}
              <Text varient="hint">({rating})</Text>
            </Rating>
          )}
          <SectionEnd>
            <Spacer position="left" size="large">
              {dteCode && <Text varient="hint">{dteCode}</Text>}
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{vicinity}</Address>
      </Info>
    </ResturantCard>
  );
};

export default CollageInfoCard;

const styles = StyleSheet.create({});
