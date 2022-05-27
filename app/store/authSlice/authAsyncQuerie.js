import { createAsyncThunk } from '@reduxjs/toolkit';
import { ToastAndroid } from 'react-native';
import apiURL from '../../config/apiURL';


export const login = createAsyncThunk(
  'user/login',
  async (payload, thunkAPI) => {
    try {
      const user = await (await apiURL.post('/auth/login', payload)).data;
      localStorage.setItem('user', user);
      return user;
    } catch (error) {
      ToastAndroid.show('Echec', ToastAndroid.SHORT);
    }
  },
);
