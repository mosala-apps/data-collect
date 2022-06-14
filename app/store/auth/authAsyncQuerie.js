import { createAsyncThunk } from '@reduxjs/toolkit';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiURL from '../../config/apiURL';
import { isConnected } from '../../config/offlineConfig';

const addOfflineUsers = async (user, password) => {
  const offlineUsers = JSON.parse(await AsyncStorage.getItem('offlineUsers')) ?? [];

  offlineUsers.push({ ...user, password });
  await AsyncStorage.setItem('offlineUsers', JSON.stringify(offlineUsers));
};

export const addUserToAsyncStorage = async (user, password) => {
  if (user) {
    await AsyncStorage.setItem('token_access', JSON.stringify(user.token));
    await AsyncStorage.setItem(
      'user',
      JSON.stringify({ ...user.user, password }),
    );

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
  return ToastAndroid.show('Identifiants incorrectes', ToastAndroid.SHORT);
};

export const offlineLogin = async (payload) => {
  const offlineUsers = JSON.parse(await AsyncStorage.getItem('offlineUsers'));
  const email = payload.email.trim();
  const password = payload.password.trim();

  const user = offlineUsers.find(
    (item) => (item.user.email === email
        || item.user.username === email
        || item.user.phone_number === email)
      && item.password === password,
  );
  if (Object.keys(user).length !== 0) {
    addUserToAsyncStorage(user, user.password);
    return user;
  }
  ToastAndroid.show('Échec de déconnexion', ToastAndroid.SHORT);
};

export const login = createAsyncThunk('user/login', async (payload) => {
  if (isConnected) {
    return onlineLogin(payload);
  }
  return offlineLogin(payload);
});

export const logout = createAsyncThunk('user/logout', async () => {
  try {
    await AsyncStorage.removeItem('token_access');
    await AsyncStorage.removeItem('user');
  } catch (error) {
    ToastAndroid.show('Échec de déconnexion', ToastAndroid.SHORT);
  }
});

export const isLoggedIn = async () => {
  const token = await AsyncStorage.getItem('token_access');
  const user = await AsyncStorage.getItem('user');
  if (token && user) {
    return Promise.resolve(true)
  } else {
    return Promise.resolve(false)
  }
}
