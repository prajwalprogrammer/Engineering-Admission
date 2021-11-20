import React, { useState } from "react";
import { View, ScrollView, Alert,Linking ,Pressable} from "react-native";
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
    status,
    website,
    phoneNo,
    email,
  } = restaurant;

  const showAlert = ({ capRound = "cap1.bundle", course = "dse.bundle" }) =>
    Alert.alert(
      "Select Round",
      "",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Cap 1",
          onPress: () =>
            navigation.navigate("pdf", {
              restaurant: restaurant,
              course: [capRound, course],
            }),
          style: "default",
        },
        {
          text: "Cap 2",
          onPress: () => {},
          style: "default",
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      }
    );

    const Number = (num,type) => {
      console.log('callNumber ----> ', num);
     
      Linking.canOpenURL(`http://`+num)
      .then(supported => {
        if (!supported) {
          Alert.alert('Phone number is not available');
        } else {
          return Linking.openURL(`${type}:${num}`);
        }
      })
      .catch(err => console.log(err));
    };
  return (
    <SafeArea>
      <CollageInfoCard resturant={restaurant} />
      {/* <ResturantsInfoCard resturant={restaurant} /> */}
      <ScrollView>
      <List.Accordion
          title={<Text variant="hint">Details</Text>}
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <View style={{ paddingRight: 30 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text variant="hint">Status :</Text>
             <Text variant="hint">{status}</Text>
            </View>
            <Divider />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text variant="hint">Website :</Text>
              <Pressable onPress={()=>Number(website,"http")}><Text variant="hint">{website}</Text></Pressable>
            </View>
            <Divider />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text variant="hint">Phone No. :</Text>
              <Pressable onPress={()=>Number(phoneNo,"tel")}><Text variant="hint">{phoneNo}</Text></Pressable>
            </View>
            <Divider />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text variant="hint">E-mail :</Text>
              <Pressable onPress={()=>Number(email,"mailto")}><Text variant="hint">{email}</Text></Pressable>
            </View>
            <Divider />
          </View>
          {/* <List.Item title={"Rating :" + rating} />
          <List.Item title="Second item" />
          <List.Item title="First item" />
          <List.Item title="Second item" /> */}
        </List.Accordion>
        <List.Accordion
          title="Cut off"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="CET" />
          <List.Item title="DSY" onPress={showAlert} />
        </List.Accordion>
        <List.Item
          title="Fee Structure"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={lunchExoanded}
          onPress={() => navigation.navigate("pdf", { restaurant: restaurant })}
        ></List.Item>

        
        <List.Section>
          <List.Item
            title="Placement"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            onPress={() => {}}
          />
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};

export default RestuarantDetails;
