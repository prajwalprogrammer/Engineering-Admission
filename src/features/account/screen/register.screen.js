import React, { useContext, useState } from "react";
import { View } from "react-native";
import { ActivityIndicator, Colors, TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBG,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Name,
} from "../component/account.style";

const Ragister = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [RepeatPassword, setRepeatPassword] = useState("");
  const { iserror, onRagister, isloading } = useContext(AuthenticationContext);

  return (
    <AccountBG>
      <AccountCover />
      <Name>Meals To Go</Name>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={Email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large" />
        <AuthInput
          label="Password"
          value={Password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        <Spacer size="large" />
        <AuthInput
          label="Comfirm Password"
          value={RepeatPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setRepeatPassword(p)}
        />
        {iserror && (
          <Spacer size="large">
            <ErrorContainer>
              <Text variant="error">{iserror}</Text>
            </ErrorContainer>
          </Spacer>
        )}
        <Spacer size="large">
          {!isloading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRagister(Email, Password,RepeatPassword)}
            >
              Ragister
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <AuthButton onPress={() => navigation.goBack()}>Back</AuthButton>
    </AccountBG>
  );
};

export default Ragister;
