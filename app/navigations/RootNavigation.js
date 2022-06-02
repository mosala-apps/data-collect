import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerInitializationScreen from './drawer';

function RootNavigation() {
  return (
    <NavigationContainer>
      <DrawerInitializationScreen />
    </NavigationContainer>
  );
}
export default RootNavigation;
