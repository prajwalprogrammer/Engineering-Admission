import React from "react";
import { StyleSheet, Image, Platform, Text, View } from "react-native";
import { WebView } from 'react-native-webview';

import styled from "styled-components";
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
const isAndroid = Platform.OS === "android";
const Compactrestaurant = ({ restaurant }) => {
  const ImageCover = isAndroid ? CoverWebview : Cover;
  return (
    <Info>
      <ImageCover source={{ uri: restaurant.photos[0] }} />
      <Text center varient="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Info>
  );
};

export default Compactrestaurant;

const styles = StyleSheet.create({});
