import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import styleSheet from './index.style'

export default function Menu() {
  return (
    <View style={styleSheet.containerMenu}>
      <View style={styleSheet.containerMenuTitle}>
        <Text>index</Text>
      </View>
      <View style={styleSheet.containerMenuIcon}>
        <View>
          <FontAwesome
            name="user-circle"
            size={24}
            style={styleSheet.containerMenuIconColor}
          />
        </View>
        <View>
          <Text style={styleSheet.containerMenuIconText}>Nom utilisateur</Text>
        </View>
      </View>
      <TouchableOpacity style={styleSheet.containerMenuIcon}>
        <View>
          <Ionicons
            name="home"
            size={24}
            style={styleSheet.containerMenuIconColor}
          />
        </View>
        <View>
          <Text style={styleSheet.containerMenuIconText}>index</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styleSheet.containerMenuIcon}>
        <View>
          <MaterialCommunityIcons
            name="send-check"
            size={24}
            style={styleSheet.containerMenuIconColor}
          />
        </View>
        <View>
          <Text style={styleSheet.containerMenuIconText}>index</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styleSheet.containerMenuIcon}>
        <View>
          <MaterialCommunityIcons
            name="send-check"
            size={24}
            style={styleSheet.containerMenuIconColor}
          />
        </View>
        <View>
          <Text style={styleSheet.containerMenuIconText}>index</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styleSheet.containerMenuIcon}>
        <View>
          <MaterialCommunityIcons
            name="send-check"
            size={24}
            style={styleSheet.containerMenuIconColor}
          />
        </View>
        <View>
          <Text style={styleSheet.containerMenuIconText}>index</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styleSheet.containerMenuIcon}>
        <View>
          <MaterialCommunityIcons
            name="send-check"
            size={24}
            style={styleSheet.containerMenuIconColor}
          />
        </View>
        <View>
          <Text style={styleSheet.containerMenuIconText}>index</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
