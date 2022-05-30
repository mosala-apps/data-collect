import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import headerRightNavigation from '../../navigations/headerNavigation';

function Home() {
  const navigation = useNavigation();
  const [userToken, setUserToken] = useState(null);
  const checkIsAuthenticatedUser = async () => {
    setUserToken(await AsyncStorage.getItem('userToken'));
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: headerRightNavigation,
    });
    checkIsAuthenticatedUser()
  }, [navigation]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Token:
        {userToken}
      </Text>
    </View>
  );
}

export default Home;
