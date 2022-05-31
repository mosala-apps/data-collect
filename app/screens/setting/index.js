import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../store';

// const dispatch = useDispatch();
function Settings({ navigation }) {
  const handleLogout = async (e) => {
    // e.preventDefault();
    // await dispatch(logout());
    await AsyncStorage.removeItem('token_access');
    await AsyncStorage.removeItem('user');
    navigation.push('Signin');
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Parameter Screen</Text>
      <Button title="Deconnexion" onPress={handleLogout} />
    </View>
  );
}

export default Settings;
