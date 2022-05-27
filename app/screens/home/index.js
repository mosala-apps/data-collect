import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from 'react-native'
import NotificationScreen from '../notification/index'
import headerRightNavigation from '../../navigations/headerNavigation'

function Home({ navigation }) {
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
