import { createAsyncThunk } from '@reduxjs/toolkit';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiURL from '../../config/apiURL';

export const login = createAsyncThunk(
  'user/login',
  async (payload) => {
    try {
      const user = await (await apiURL.post('/auth/login', payload)).data;
      // asynch storage
      if (user) {
        await AsyncStorage.setItem('userToken', JSON.stringify(user.token));
        // add the token in axios header for all request
        apiURL.defaults.headers.common.Authorization = `Bearer ${user.token}`;
        ToastAndroid.show('La connexion a réussi', ToastAndroid.SHORT);
        return user;
      }
      ToastAndroid.show('Echec', ToastAndroid.SHORT);
    } catch (error) {
      ToastAndroid.show('Echec', ToastAndroid.SHORT);
    }
  },
);

export const logout = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await AsyncStorage.removeItem('token');
      return true;
    } catch (error) {
      ToastAndroid.show('Echec de deconnexion', ToastAndroid.SHORT);
    }
  },
);
