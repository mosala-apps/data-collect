import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import headerRightNavigation from '../../navigations/headerNavigation'

function Home() {
  const navigation = useNavigation()
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: headerRightNavigation,
    })
  }, [navigation])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

export default Home
