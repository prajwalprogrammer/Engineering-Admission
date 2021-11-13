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

const ResturantsInfoCard = (resturant) => {
 
  const {
    name = "Zomato",
    vicinity = "Walmiki Nagar,Latur",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    rating = 4,
    isOpenNow = true,
    isClosedTemparily = true,
    photos,
    placeId
  } = resturant.resturant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <ResturantCard elevation={5}>
      
      <Favourite restaurant={resturant.resturant} />
      
      <ResturantCardCover
        elevation={15}
        style={{}}
        source={{ uri: photos[0] }}
      />
      <Info>
        <Text varient="label">{name}</Text>

        <Section>
          <Rating>
            {ratingArray.map((_,i) => (
              <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemparily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{vicinity}</Address>
      </Info>
    </ResturantCard>
  );
};

export default ResturantsInfoCard;

const styles = StyleSheet.create({});
