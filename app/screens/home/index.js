import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import headerRightNavigation from '../../navigations/headerNavigation';
import { authSelector } from '../../store';

function Home() {
  const navigation = useNavigation();
  const [userToken, setUserToken] = useState(null);
  const { user } = useSelector(authSelector);
  const checkIsAuthenticatedUser = async () => {
    if (user === null) {
      setUserToken(await AsyncStorage.getItem(JSON.parse('user')));
      user = {...userToken}
    }
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: headerRightNavigation,
    });
    checkIsAuthenticatedUser();
  }, [navigation]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Token:
        {JSON.stringify(user)}

      </Text>
    </View>
  );
}

export default Home;
