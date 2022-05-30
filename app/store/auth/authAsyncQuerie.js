import { createAsyncThunk } from '@reduxjs/toolkit';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiURL from '../../config/apiURL';

export const login = createAsyncThunk(
  'user/login',
  async (payload) => {
    const user = await (await apiURL.post('/auth/login', payload)).data;
    // asynch storage
    if (Object.keys(user).length !== 0) {
      await AsyncStorage.setItem('token_access', JSON.stringify(user.token));
      await AsyncStorage.setItem('user', JSON.stringify(user.user));
      // add the token in axios header for all request
      apiURL.defaults.headers.common.Authorization = `Bearer ${user.token}`;
      ToastAndroid.show('La connexion a réussi', ToastAndroid.SHORT);
      return user;
    }
    ToastAndroid.show('Echec', ToastAndroid.SHORT);
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
export const loginOffline = createAsyncThunk(
  'user/loginOffline',
  async (payload) => {
    try {
      const user = JSON.parse(await AsyncStorage.getItem('user'));
      if (user.email === payload.email
        || user.username === payload.email
         || user.phone_number === payload.email) {
        ToastAndroid.show('La connexion a réussi', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Echec de deconnexion', ToastAndroid.SHORT);
      }
      return true;
    } catch (error) {
      ToastAndroid.show('Echec de deconnexion', ToastAndroid.SHORT);
    }
  },
);
