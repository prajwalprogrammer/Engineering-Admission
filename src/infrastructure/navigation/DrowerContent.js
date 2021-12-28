import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Divider,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import styled from "styled-components";
import { FavouriteContext } from "../../services/favourite/favourite.context";

export function DrawerContent(props) {
  const { toggleTheme } = useContext(FavouriteContext);
  const Title = styled(Text)`
font-family:${(props) => props.theme.fonts.heading}
font-size:${(props) => props.theme.fontSizes.body}
color:${(props) => props.theme.colors.text.secondary}
`;
  const Section = styled(Text)`
font-family:${(props) => props.theme.fonts.body}
font-size:${(props) => props.theme.fontSizes.title}
`;
  const ContentStyle = styled(DrawerItem).attrs({
    inactiveBackgroundColor: "white",
    activeBackgroundColor: "grey",
  })``;

  const paperTheme = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={require("../../../assets/icon.png")}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Section style={styles.title}>
                  Engineering {"\n"} Admission
                </Section>
                <Caption style={styles.caption}>@prajwalachwale</Caption>
              </View>
            </View>
          </View>
          <Divider style={{ marginTop: 10 }} />
          <Drawer.Section
            title={<Section>B.E/B-Tech Admission 2021</Section>}
            style={styles.drawerSection}
          >
            <ContentStyle
              label={() => <Title>Final Merit List</Title>}
              onPress={() => {
                props.navigation.navigate("pdf", {
                  code: "cetmerit",
                  folder: "cetmeritlist",
                });
              }}
            />
            <ContentStyle
              label={() => <Title>Seat Matrix</Title>}
              onPress={() => {
                props.navigation.navigate("pdf", {
                  code: "seatmatrixcet",
                  folder: "cetseatmatrix",
                });
              }}
            />
            <ContentStyle
              label={() => <Title>Cap Round 1(2021)</Title>}
              onPress={() => {
                props.navigation.navigate("pdf", {
                  code: "cetcapmain",
                  folder: "cetmaincutoff1",
                });
              }}
            />
            <ContentStyle
              label={() => <Title>Cap Round 2(2021)</Title>}
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section
            title={<Section>DSY Admission 2021</Section>}
            style={styles.drawerSection}
          >
            <ContentStyle
              label={() => <Title>Final Merit List</Title>}
              onPress={() => {
                props.navigation.navigate("pdf", {
                  code: "finalmeritlist",
                  folder: "provisionalmeritlist",
                });
              }}
            />
            <ContentStyle
              label={() => <Title>Seat Matrix</Title>}
              onPress={() => {
                props.navigation.navigate("pdf", {
                  code: "seatmatrix",
                  folder: "seatmatrix",
                });
              }}
            />
            <ContentStyle
              label={() => <Title>Cap Round 1(2021)</Title>}
              onPress={() => {
                props.navigation.navigate("pdf", {
                  code: "DSE_CAP1_CUTOFF",
                  folder: "dsemaincutoff1",
                });
              }}
            />
            <ContentStyle
              label={() => <Title>Cap Round 2(2021)</Title>}
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section title={<Section>Preferences</Section>}>
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Title>Dark Theme</Title>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
            <ContentStyle
              label={() => <Title>Favourites</Title>}
              onPress={() => {
                props.navigation.navigate("favourites");
              }}
            />
            <ContentStyle
              label={() => <Title>Privacy Policy</Title>}
              onPress={() => {}}
            />
            <ContentStyle
              label={() => <Title>Help</Title>}
              onPress={() => {}}
            />
            <ContentStyle
              label={() => <Title>Share</Title>}
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});
