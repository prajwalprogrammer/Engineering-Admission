import React, { useContext, useEffect,useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Compactrestaurant from "../restaurant/compact-retaurant-info";
import { Spacer } from "../spacer/spacer.component";
import { ButtonGroup } from "react-native-elements";
import { LocationContext } from "../../services/location/location.context";

const FavouriteWrapper = styled.View`
  padding: 5px;
`;

const Name = styled(Text)`
font-family:${(props) => props.theme.fonts.body}
font-size:${(props) => props.theme.fontSizes.button}
padding:8px
`;

const Shortcuts = [
  "All",
  "Government",
  "Private",
  "Private-Autonoumous",
  "Pune",
  "Nashik",
  "Mumbai",
  "Aurangabad",
  "Amravati",
  "Nagpur",
];
const SearchShortcutBar = () => {
  const { search, keyword } = useContext(LocationContext);
  const [selectedIndex, setSelectedIndex] = useState(Shortcuts.indexOf(keyword));
  const updateIndex = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
    search(Shortcuts[selectedIndex]);
  };
  useEffect(() => {
    setSelectedIndex(Shortcuts.indexOf(keyword))
  }, [keyword])
  return (
    <FavouriteWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ButtonGroup
          onPress={updateIndex}
          selectedIndex={selectedIndex}
          buttons={Shortcuts}
          buttonStyle={{
            borderRadius: 35,
            backgroundColor: "white",
            padding: 8,
          }}
          innerBorderStyle={{ width: 6, color: "#F1F1F1" }}
          containerStyle={{
            //borderRadius: 35,
            backgroundColor: "#F1F1F1",
            borderColor: "#F1F1F1",
          }}
          selectedButtonStyle={{
            backgroundColor: "#757575",
            borderColor: "#262626",
          }}
        />

        {/* {Shortcuts.map((Region) => {
          const key = Region;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("ResturantDetails", { restaurant: favourite })
                }
              >
              </TouchableOpacity>
              <View
                style={{
                  borderRadius: 35,
                  backgroundColor: "white",
                }}
              >
                <Name>{Region}</Name>
              </View>
            </Spacer>
          );
        })} */}
      </ScrollView>
    </FavouriteWrapper>
  );
};

export default SearchShortcutBar;
