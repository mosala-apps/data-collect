import React from 'react'
import { Text, View } from 'react-native'
import HeaderNavigation from '../../navigations/headerNavigation'
function Home() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderNavigation />
      <Text>Home Screen</Text>
    </View>
  )
}

export default Home
