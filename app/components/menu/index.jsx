import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import {
  FontAwesome,
  Ionicons,
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import OnlineStatus from '../onlineStatus';
import styleSheet from './index.style';
import { authSelector, logout, setUser } from '../../store';

export default function Menu({ navigation }) {
  const [hospitalName, setHospitalName] = useState('');
  const [userName, setUserName] = useState('');
  const {
    user, isLoading, isAuthenticated, authError,
  } = useSelector(authSelector);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    navigation.navigate('Signin');
    dispatch(logout());
  };
  const checkIsAuthenticatedUser = async () => {
    if (user && isAuthenticated) {
      setHospitalName(user.hospital.name);
      setUserName(user.name);
    }
  };
  useEffect(() => {
    checkIsAuthenticatedUser();
  }, [user, isAuthenticated]);
  return (
    <View style={styleSheet.containerMenu}>
      <View style={styleSheet.containerMenuTitle}>
        <Text style={{'textTransform': 'uppercase'}}>{hospitalName}</Text>
        <OnlineStatus />
      </View>
      <View style={styleSheet.lineStyleBorder} />
      <View style={styleSheet.containerMenuIcon}>
        <View>
          <FontAwesome
            name="user-circle"
            size={24}
            style={styleSheet.containerMenuIconColor}
          />
        </View>
        <View style={styleSheet.containerMenuIconText}>
          <Text style={{'textTransform': 'capitalize'}}>{userName}</Text>
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
        onPress={() => navigation.navigate('SynchronizedForms')}
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
        onPress={() => navigation.navigate('PendingForms')}
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
        onPress={() => navigation.navigate('ConflictsHandling')}
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
        onPress={() => navigation.navigate('Drafts')}
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

Menu.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};
