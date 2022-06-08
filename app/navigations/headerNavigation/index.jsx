import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styleSheet from './index.style';

export default function HeaderNavigation() {
  const navigation = useNavigation();
  return (
    <View style={styleSheet.header}>
      <View>
        <TouchableWithoutFeedback
          onPress={() => navigation.toggleDrawer()}
          style={{ marginRight: '10%' }}
        >
          <View>
            <Feather size={24} name="menu" style={styleSheet.color} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styleSheet.headerNavigationRight}>
        <View style={{ marginRight: '15%' }}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Notifications')}
          >
            <View>
              <Ionicons
                name="ios-notifications-outline"
                style={styleSheet.color}
                size={24}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Settings')}>
            <View>
              <Ionicons
                name="settings-outline"
                size={24}
                style={styleSheet.color}
                color="black"
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}
