import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import NavigationStack from '../NavigationStack'
import Menu from '../../components/menu'
import styleSheet from './index.style'

const Drawer = createDrawerNavigator()

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Menu navigation={props.navigation} />
    </DrawerContentScrollView>
  )
}
export default function DrawerInitializationScreen() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: styleSheet.drawerInitializationStyle,
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="homDrawer" component={NavigationStack} />
    </Drawer.Navigator>
  )
}
