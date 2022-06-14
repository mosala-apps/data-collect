import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerInitializationScreen from './drawer';
import SetupComponent from '../components/SetupComponent';
 
function RootNavigation() {
  return (
    <NavigationContainer>
      <SetupComponent />
      <DrawerInitializationScreen />
    </NavigationContainer>
  );
}
export default RootNavigation;
