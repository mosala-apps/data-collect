import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { FontAwesome, Ionicons, Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import styleSheet from './index.style'

export default function HeaderNavigation() {
  const navigation = useNavigation()
  return (
    <View style={styleSheet.header}>
      <View>
        <TouchableHighlight
          onPress={() => navigation.toggleDrawer()}
          style={{ marginRight: '10%' }}
        >
          <View>
            <Feather size={24} name="menu" style={styleSheet.color} />
          </View>
        </TouchableHighlight>
      </View>
      <View style={styleSheet.headerNavigationRight}>
        <View style={{ marginRight: '15%' }}>
          <TouchableHighlight
            onPress={() => navigation.navigate('Notification')}
          >
            <View>
              <Ionicons
                name="ios-notifications-outline"
                style={styleSheet.color}
                size={24}
              />
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight onPress={() => navigation.navigate('Parameter')}>
            <View>
              <FontAwesome
                name="user-circle"
                style={styleSheet.color}
                size={24}
              />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
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
  )
}

// function Header({ navigation }) {
//   return (
//     <View style={styles.header}>
//       <View>
//         <Icon
//           type="material-community"
//           name="menu"
//           color={colors.defaultBackgroundColor}
//           size={32}
//           onPress={() => navigation.toggleDrawer()}
//         />
//       </View>
//       <View>
//         <Text style={styles.text}>Hello Company Name</Text>
//       </View>
//       <View>
//         <Image source={logo3} />
//       </View>
//     </View>
//   )
// }
