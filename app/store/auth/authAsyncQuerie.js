import { createAsyncThunk } from '@reduxjs/toolkit';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiURL from '../../config/apiURL';
import { isConnected } from '../../config/offlineConfig';

const addOfflineUsers = async (user, password) => {
  let offlineUsers = [];
  offlineUsers.push({ ...user, password });
  await AsyncStorage.setItem('offlineUsers', JSON.stringify(offlineUsers));
};
export const addUserToAsyncStorage = async (user, password) => {
  if (user) {
    await AsyncStorage.setItem('token_access', JSON.stringify(user.token));
    await AsyncStorage.setItem('user', JSON.stringify({ ...user.user, password }));

    apiURL.defaults.headers.common.Authorization = `Bearer ${user.token}`;
    ToastAndroid.show('La connexion a réussi', ToastAndroid.SHORT);
  }
};

export const onlineLogin = async (payload) => {
  const user = await (await apiURL.post('/auth/login', payload)).data;

  if (Object.keys(user).length !== 0) {
    addUserToAsyncStorage(user, payload.password);
    addOfflineUsers(user, payload.password);
    return user;
  }
  return ToastAndroid.show('Echec', ToastAndroid.SHORT);
};
export const offlineLogin = async (payload) => {
  const offlineUsers = JSON.parse(await AsyncStorage.getItem('offlineUsers'));

  const user = offlineUsers.find((item) => (item.user.email === payload.email
        || item.user.usernmae === payload.email
        || item.user.phone_number === payload.email)
       && item.password === payload.password);

  if (Object.keys(user).length !== 0) {
    addUserToAsyncStorage(user, user.password);
    addOfflineUsers(user, payload.password);
    return user;
  }
  ToastAndroid.show('Echec de deconnexion', ToastAndroid.SHORT);
};

export const login = createAsyncThunk(
  'user/login',
  async (payload) => {
    if (isConnected) {
      return onlineLogin(payload);
    }
    return offlineLogin(payload);
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
