import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import {
  FontAwesome,
  Ionicons,
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import styleSheet from './index.style';
import { logout } from '../../store';

export default function Menu({ navigation }) {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    navigation.navigate('Signin');
    dispatch(logout());
  };
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
        <View style={styleSheet.containerMenuIconText}>
          <Text>Nom utilisateur</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styleSheet.containerMenuIcon}
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <View>
          <Ionicons
            name="home"
            size={24}
            style={styleSheet.containerMenuIconColor}
          />
        </View>
        <View style={styleSheet.containerMenuIconText}>
          <Text>Mes Formulaires</Text>
        </View>
      </TouchableOpacity>
      <Text style={styleSheet.lineStyleText}>Toutes les soumissions</Text>
      <View style={styleSheet.lineStyleBorder} />

      <TouchableOpacity
        style={styleSheet.containerMenuIcon}
        onPress={() => navigation.navigate('SynchronizationForm')}
      >
        <View>
          <MaterialCommunityIcons
            name="send-check"
            size={24}
            style={styleSheet.containerMenuIconColor}
          />
        </View>
        <View style={styleSheet.containerMenuIconText}>
          <Text>Synchronisés</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styleSheet.containerMenuIcon}
        onPress={() => navigation.navigate('PendingForm')}
      >
        <View>
          <MaterialCommunityIcons
            name="send-clock"
            size={24}
            style={styleSheet.containerMenuIconColor}
          />
        </View>
        <View style={styleSheet.containerMenuIconText}>
          <Text>En attente</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styleSheet.containerMenuIcon}
        onPress={() => navigation.navigate('ConflictHandling')}
      >
        <View>
          <MaterialIcons
            name="cancel-schedule-send"
            size={24}
            style={styleSheet.containerMenuIconColor}
          />
        </View>
        <View style={styleSheet.containerMenuIconText}>
          <Text>Gestion des conflicts</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styleSheet.containerMenuIcon}
        onPress={() => navigation.navigate('Draft')}
      >
        <View>
          <Foundation
            name="clipboard-pencil"
            size={24}
            style={styleSheet.containerMenuIconColor}
          />
        </View>
        <View style={styleSheet.containerMenuIconText}>
          <Text>Brouillons</Text>
        </View>
      </TouchableOpacity>
      <Text style={styleSheet.lineStyleText} />
      <View style={styleSheet.lineStyleBorder} />
      <TouchableOpacity
        style={styleSheet.containerMenuIcon}
        onPress={() => navigation.navigate('Settings')}
      >
        <View>
          <Ionicons
            name="settings-outline"
            size={24}
            style={styleSheet.containerMenuIconColor}
            color="black"
          />
        </View>
        <View style={styleSheet.containerMenuIconText}>
          <Text>Paramètres</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleLogout}
        style={styleSheet.containerMenuIcon}
      >
        <View>
          <FontAwesome
            name="sign-out"
            size={24}
            style={styleSheet.containerMenuIconColor}
            color="black"
          />
        </View>
        <View style={styleSheet.containerMenuIconText}>
          <Text>Déconnexion</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
Menu.defaultProps = {
  navigation: PropTypes.shape({
    navigate: PropTypes.string,
  }),
};
