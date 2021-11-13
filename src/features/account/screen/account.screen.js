import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";
import {
  AccountBG,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  Name
} from "../component/account.style";
import LottieView from "lottie-react-native";

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBG>
      <AccountCover />
      <AnimationWrapper>
      <LottieView
        key="animation"
        autoPlay
        loop
        resizeMode="cover"
        source={require("../../../../assets/waterlemon.json")}
      />
      </AnimationWrapper>
      <Name>Meals To Go</Name>
      <AccountContainer>
        <Button
          icon="lock-open-outline"
          mode="contained"
          color={colors.brand.primary}
          onPress={() => navigation.navigate("login")}
        >
          Login
        </Button>
        <Spacer size="large">
          <Button
            icon="lock-open-outline"
            mode="contained"
            color={colors.brand.primary}
            onPress={() => navigation.navigate("ragister")}
          >
            Register
          </Button>
        </Spacer>
      </AccountContainer>
    </AccountBG>
  );
};

export default AccountScreen;
