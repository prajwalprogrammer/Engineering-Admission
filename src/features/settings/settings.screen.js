import React, { useContext } from 'react'
import { View } from 'react-native'
import { Avatar ,List} from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../components/spacer/spacer.component';
import { Text } from '../../components/typography/text.component';
import { SafeArea } from '../../components/utility/safe-area.component';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
const SettingItem = styled(List.Item)`
padding:16px
`
const AvatarContainer = styled(View)`
    align-items:center;
    margin-top:10px;
`
const SettingsScreen = ({navigation}) => {
    const {user, onLogout } = useContext(AuthenticationContext);
    return (
      <SafeArea>
          <AvatarContainer>
          <Avatar.Icon size={180} icon="human"  backgroundColor="#2182BD" />
          <Spacer position="top"  size="large">
              <Text varient="caption">{user.email}</Text>
          </Spacer>
          </AvatarContainer>
        <List.Section>
            <SettingItem
             title="Favourites"
             description="View Your Favourites"
             left={(props)=> <List.Icon {...props} color="black" icon="heart" />}
             onPress={()=> navigation.navigate("favourites")} />
            <SettingItem
             title="Logout"
             left={(props)=> <List.Icon {...props} color="black" icon="door" />}
             onPress={()=>onLogout()} />
        </List.Section>
      </SafeArea>)
}

export default SettingsScreen
