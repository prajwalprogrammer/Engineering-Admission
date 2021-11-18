import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { ActivityIndicator, Divider, List } from "react-native-paper";
import WebView from "react-native-webview";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import CollageInfoCard from "../components/CollageInfoCard";
import LoadPDF from "../components/loadPDF";
import PDFReader from "rn-pdf-reader-js";
import ResturantsInfoCard from "../components/resturants-info-card.component";

const RestuarantDetails = ({ route, navigation }) => {
  // const LoadPDF=()=>{
  //   return(
  //     <View style={{flex:1}}>
  //           <Text variant="hint">hiwesgf</Text>
  //           <Text variant="hint">hiwesgf</Text>

  //           <Divider />
  //           <Text variant="error">hiwesgf</Text>
  //           <Divider />
  //           <Text variant="error">hiwesgf</Text>
  //           <Divider />
  //         </View>

  //   )
  // }
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExoanded, setLunchExoanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const {
    name = "Zomato",
    vicinity = "Walmiki Nagar,Latur",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    rating = 4,
    photos,
    placeId = 12,
    feeStructure,
  } = restaurant;
  return (
    <SafeArea>
      <CollageInfoCard resturant={restaurant} />
      {/* <ResturantsInfoCard resturant={restaurant} /> */}
      <ScrollView>
        <List.Accordion
          title="Cut off"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="CET" />
          <List.Item title="DSY" />
        </List.Accordion>
        <List.Accordion
          title="Fee Structure"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={lunchExoanded}
          onPress={() => setLunchExoanded(!lunchExoanded)}
        >
          <List.Item
            title="CET"
            onPress={() => (
              <PDFReader
                source={{
                  uri: "https://drive.google.com/file/d/1O5__YqRMtZihn1yYrhyJNchCjtzu78V4/view?usp=sharing",
                }}
                onLoad={() => <ActivityIndicator size={50} animating={true} />}
                onError={() => alert("fsd")}
              />
            )}
          />
          <List.Item title="DSY" />
        </List.Accordion>

        <List.Accordion
          title={<Text variant="hint">Details</Text>}
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <View>
            <Text variant="hint">hiwesgf</Text>
            <Text variant="hint">hiwesgf</Text>

            <Divider />
            <Text variant="error">hiwesgf</Text>
            <Divider />
            <Text variant="error">hiwesgf</Text>
            <Divider />
          </View>
          {/* <List.Item title={"Rating :" + rating} />
          <List.Item title="Second item" />
          <List.Item title="First item" />
          <List.Item title="Second item" /> */}
        </List.Accordion>
        <List.Section>
          <List.Item
            title="Placement"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            onPress={() => navigation.navigate("pdf")}
          />
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};

export default RestuarantDetails;
