import React from 'react'
import { Text, View } from 'react-native'
import HeaderNavigation from '../../navigations/headerNavigation'
import styleSheet from './index.style'

function Home() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderNavigation />
      <View style={styleSheet.containerHome}>
        {/* <View style={styleSheet.containerHomeForm} /> */}
      </View>
      <Text>Home Screen</Text>
    </View>
  )
}

export default Home
