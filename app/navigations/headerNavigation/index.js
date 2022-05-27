import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function headerRightNavigation() {
  const navigation = useNavigation();
  return (
    <Text>
      {' '}
      <TouchableHighlight
        onPress={() => navigation.navigate('Notification')}
        style={{ marginRight: '10%' }}
      >
        <View>
          <Ionicons name="ios-notifications-outline" size={20} color="white" />
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Parameter')}
        style={{ marginLeft: 30 }}
      >
        <View>
          <FontAwesome name="user-circle" size={20} color="white" />
        </View>
      </TouchableHighlight>
    </Text>
  );
}
export function headerLeftNavigation() {
  return (
    <Text>
      {' '}
      <TouchableHighlight onPress={() => alert('This is a Ionicons!')}>
        <View>
          <Ionicons name="ios-notifications-outline" size={24} color="white" />
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => alert('This is a FontAwesome!')}>
        <View>
          <FontAwesome name="user-circle" size={24} color="white" />
        </View>
      </TouchableHighlight>
    </Text>
  );
}
