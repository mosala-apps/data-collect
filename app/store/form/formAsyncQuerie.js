import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiURL from '../../config/apiURL';
import { isConnected } from '../../config/offlineConfig';

export const OfflineForms = async (id) => {
  const offlineForms = JSON.parse(await AsyncStorage.getItem('offlineUsers'));
  const forms = offlineForms.find((form) => form.id === id);
  return forms;
};

export const OnlineForms = async (id) => {
  const forms = await (await apiURL.get(`/hospitals-data/${id}`)).data;
  const offlineForms = JSON.parse(await AsyncStorage.getItem('offlineUsers'));
  const foundFormId = offlineForms.findIndex((form) => form.id === id);

  if (foundFormId) {
    offlineForms[foundFormId] = forms;
    await AsyncStorage.setItem('offlineForms', JSON.stringify(offlineForms));
    return forms;
  }

  offlineForms.push(...forms);
  await AsyncStorage.setItem('offlineForms', JSON.stringify(offlineForms));
  return forms;
};

export const getForms = createAsyncThunk(
  'form/getForms',
  async (payload) => {
    try {
      if (isConnected) {
        return OnlineForms(payload.id);
      }
      return OfflineForms(payload.id);
    } catch (error) {
      return error;
    }
  },
);
