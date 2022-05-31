import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import headerRightNavigation from '../../navigations/headerNavigation';
import { setUser } from '../../store';

function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const checkIsAuthenticatedUser = async () => {
    if (Object.keys(user).length === 0) {
      dispatch(setUser(JSON.parse(await AsyncStorage.getItem('user'))));
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
        name:
        {user.name}
        {JSON.stringify(user)}

      </Text>
    </View>
  )
}

export default Home
