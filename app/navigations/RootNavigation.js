import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerInitializationScreen from './drawer/index'
//import NavigationStack from './NavigationStack'

function RootNavigation() {
  return (
    <NavigationContainer>
      <DrawerInitializationScreen />
    </NavigationContainer>
  )
}
export default RootNavigation
