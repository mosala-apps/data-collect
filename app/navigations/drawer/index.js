import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import NavigationStack from '../NavigationStack';
import Menu from '../../components/menu';
// import indexStyle from './index.style'

const Drawer = createDrawerNavigator();

function CustomDrawerContent() {
  return (
    <DrawerContentScrollView>
      <Menu />
    </DrawerContentScrollView>
  );
}
export default function DrawerInitializationScreen() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Menu" component={NavigationStack} />
    </Drawer.Navigator>
  );
}
