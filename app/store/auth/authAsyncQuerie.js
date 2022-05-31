import { createAsyncThunk } from '@reduxjs/toolkit';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiURL from '../../config/apiURL';
import { RXDB__addUser } from '../../database/user.schema';
import { isConnected } from '../../config/offlineConfig';

const onlineLogin = async (payload) => {
  const user = await (await apiURL.post('/auth/login', payload)).data;
  // asynch storage
  if (Object.keys(user).length !== 0) {
    await AsyncStorage.setItem('token_access', JSON.stringify(user.token));
    await AsyncStorage.setItem('user', JSON.stringify(user.user));
    // add the token in axios header for all request
    apiURL.defaults.headers.common.Authorization = `Bearer ${user.token}`;
    ToastAndroid.show('La connexion a réussi', ToastAndroid.SHORT);
    try {
      // ad the user in the database
      await RXDB__addUser(user.user);
    } catch (error) {
      throw new Error("Echec d'insertion de l'utilisateur dans la DB local");
    }

    return user;
  }
  ToastAndroid.show('Echec', ToastAndroid.SHORT);
};
const offlineLogin = async (payload) => {
  const user = JSON.parse(await AsyncStorage.getItem('user'));
  if (user.email === payload.email
    || user.username === payload.email
     || user.phone_number === payload.email) {
    ToastAndroid.show('La connexion a réussi', ToastAndroid.SHORT);
  } else {
    ToastAndroid.show('Echec de deconnexion', ToastAndroid.SHORT);
  }
};

export const login = createAsyncThunk(
  'user/login',
  async (payload) => {
    if (isConnected) {
      onlineLogin(payload);
    } else {
      offlineLogin(payload);
      alert(isConnected);
    }
  },
);

export const logout = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await AsyncStorage.removeItem('token_access');
      await AsyncStorage.removeItem('user');
      return true;
    } catch (error) {
      ToastAndroid.show('Echec de deconnexion', ToastAndroid.SHORT);
    }
  },
);
