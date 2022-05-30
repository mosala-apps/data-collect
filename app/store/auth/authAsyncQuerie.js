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
        return user;
      }
      // const data =await AsyncStorage.getItem('token')
      // console.log("asych data:",data);
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
