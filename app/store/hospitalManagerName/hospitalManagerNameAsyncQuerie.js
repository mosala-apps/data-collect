import { createAsyncThunk } from '@reduxjs/toolkit';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const addHospitalManagerNames = createAsyncThunk(
  'hospitalManagerName/addHospitalManagerNames',
  async (payload) => {
    try {
      await AsyncStorage.setItem('hospitalManagerName', JSON.stringify(payload));
      ToastAndroid.show('Les identifiants ont été mise à jour avès succès!', ToastAndroid.SHORT);
      return payload;
    } catch (error) {
      throw new Error('erreur');
    }
  },
);
