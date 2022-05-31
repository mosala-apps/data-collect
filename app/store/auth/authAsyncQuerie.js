import { createAsyncThunk } from '@reduxjs/toolkit';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiURL from '../../config/apiURL';
import { isConnected } from '../../config/offlineConfig';

const addUser = async (user, password) => {
  const offlineUsers = [];
  if (user) {
    offlineUsers.push({ ...user, password });
    await AsyncStorage.setItem('offlineUsers', offlineUsers);
  }
};
const addUserToAsyncStorage = async (user, password) => {
  if (user) {
    await AsyncStorage.setItem('token_access', JSON.stringify(user.token));
    await AsyncStorage.setItem('user', JSON.stringify({ ...user.user, password }));

    apiURL.defaults.headers.common.Authorization = `Bearer ${user.token}`;
    ToastAndroid.show('La connexion a réussi', ToastAndroid.SHORT);
  }
};

const onlineLogin = async (payload) => {
  const user = await (await apiURL.post('/auth/login', payload)).data;

  if (Object.keys(user).length !== 0) {
    addUserToAsyncStorage(user);
    return user;
  }
  ToastAndroid.show('Echec', ToastAndroid.SHORT);
};
const offlineLogin = async (payload) => {
  const offlineUsers = await AsyncStorage.getItem('offlineUsers');
  const user = JSON.parse(offlineUsers).find((user) => (user.email === payload.email
        || user.username === payload.email
        || user.phone_number === payload.email)
       && user.password === payload.password);
  if (user) {
    ToastAndroid.show('La connexion a réussi', ToastAndroid.SHORT);
    return user;
  }
  ToastAndroid.show('Echec de deconnexion', ToastAndroid.SHORT);
};

export const login = createAsyncThunk(
  'user/login',
  async (payload) => {
    if (isConnected) {
      onlineLogin(payload);
    } else {
      offlineLogin(payload);
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
