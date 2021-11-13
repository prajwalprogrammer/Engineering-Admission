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

const LoginScreen = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { iserror, onLogin ,isloading} = useContext(AuthenticationContext);

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
        {iserror && (
          <Spacer size="large">
            <ErrorContainer>
              <Text variant="error">{iserror}</Text>
            </ErrorContainer>
          </Spacer>
        )}
        <Spacer size="large">
            {!isloading?
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(Email, Password)}
          >
            Login
          </AuthButton>:
          <ActivityIndicator animating={true} color={Colors.blue300} />}
        </Spacer>
      </AccountContainer>
      <AuthButton onPress={() => navigation.goBack()}>Back</AuthButton>
    </AccountBG>
  );
};

export default LoginScreen;
