import { createAsyncThunk } from '@reduxjs/toolkit';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiURL from '../../config/apiURL';

export const login = createAsyncThunk(
  'user/login',
  async (payload, thunkAPI) => {
    try {
      const user = await (await apiURL.post('/auth/login', payload)).data;
      // asynch storage
      await AsyncStorage.setItem('token', JSON.stringify(user.token));
      return user;
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
