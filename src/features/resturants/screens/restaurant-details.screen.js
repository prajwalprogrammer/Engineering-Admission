import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { List } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import ResturantsInfoCard from "../components/resturants-info-card.component";

const RestuarantDetails = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExoanded, setLunchExoanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  return (
    <SafeArea>
      <ResturantsInfoCard resturant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        ></List.Accordion>
        <List.Accordion
          title="lunch"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={lunchExoanded}
          onPress={() => setLunchExoanded(!lunchExoanded)}
        >
          
          <List.Item title="First item" />
          <List.Item title="Second item" />
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="dinner"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <List.Accordion
          title="drinks"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};

export default RestuarantDetails;
