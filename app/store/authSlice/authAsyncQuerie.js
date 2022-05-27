import { createAsyncThunk } from '@reduxjs/toolkit';
import { ToastAndroid } from 'react-native';
import apiURL from '../../config/apiURL';

export const login = createAsyncThunk(
  'user/login',
  async (payload, thunkAPI) => {
    const user = await (await apiURL.post('/auth/login', payload)).data;
    if (user) {
      ToastAndroid.show('La connexion a réussi', ToastAndroid.LONG, ToastAndroid.CENTER);
      // localStorage.setItem('user', user);
      return user;
    }
    ToastAndroid.show('La connexion a echoué', ToastAndroid.SHORT);
  },
);
