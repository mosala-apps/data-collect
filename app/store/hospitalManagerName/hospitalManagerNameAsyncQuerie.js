import { createAsyncThunk } from '@reduxjs/toolkit';
import { ToastAndroid } from 'react-native';

export const addHospitalManagerNames = createAsyncThunk(
  'hospitalManagerName/addHospitalManagerNames',
  async (payload) => {
    try {
      ToastAndroid.show('La mis à jour de vos paramètres a réussi avec succès!', ToastAndroid.TOP);
      return payload;
    } catch (error) {
      throw new Error('erreur');
    }
  },
);
