import React from 'react'
import { Button, Text, TouchableHighlight, View } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

export default function headerRightNavigation() {
  return (
    <Text>
      {' '}
      <TouchableHighlight onPress={() => alert('This is a Ionicons!')}>
        <View>
          <Ionicons name="ios-notifications-outline" size={24} color="black" />
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => alert('This is a FontAwesome!')}>
        <View>
          <FontAwesome name="user-circle" size={24} color="black" />
        </View>
      </TouchableHighlight>
    </Text>
  )
}
