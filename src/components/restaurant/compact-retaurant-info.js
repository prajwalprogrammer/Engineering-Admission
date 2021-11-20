import React from "react";
import { StyleSheet, Image, Platform, Text, View } from "react-native";
import { WebView } from 'react-native-webview';

import styled from "styled-components/native";
const Info = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
const Cover = styled(Image)`
  border-radius: 10px;
  height: 100px;
  width: 120px;
`;
const CoverWebview = styled(WebView)`
  border-radius: 10px;
  height: 100px;
  width: 120px;
`;
 const Name = styled(Text)`
font-family:${(props) => props.theme.fonts.body}
font-size:${(props) => props.theme.fontSizes.caption}

`;
const isAndroid = Platform.OS === "android";
const Compactrestaurant = ({ restaurant,isMap=true }) => {
  const ImageCover = isAndroid ? isMap?CoverWebview:Cover : Cover;
  return (
    <Info>
      <ImageCover source={{ uri: restaurant.icon }} />
      <Name center varient="caption" numberOfLines={3}>
        {restaurant.name}
      </Name>
    </Info>
  );
};

export default Compactrestaurant;

const styles = StyleSheet.create({});
