import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../store';

// const dispatch = useDispatch();
function Settings({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Parameter Screen</Text>
    </View>
  );
}

export default Settings;
