import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiURL from '../../config/apiURL';
import { isConnected } from '../../config/offlineConfig';

export const offlineHospital = async (id) => {
  const offlineHospitals = JSON.parse(await AsyncStorage.getItem('offlineHospitals')) ?? [];
  return offlineHospitals.find((hospitals) => hospitals.id === id);
};
export const addOffLineHospital = async (offlineHospitals, hospital) => {
  offlineHospitals.push({ ...hospital });
  await AsyncStorage.setItem(
    'offlineHospitals',
    JSON.stringify(offlineHospitals),
  );
};

export const onlineHospital = async (id) => {
  const hospital = await (await apiURL.get(`/hospitals-data/${id}/deep`)).data;
  const offlineHospitals = JSON.parse(await AsyncStorage.getItem('offlineHospitals')) ?? [];
  if (offlineHospitals.length === 0) {
    addOffLineHospital(offlineHospitals, hospital);
    return hospital;
  }
  const foundHospitalId = offlineHospitals.findIndex(
    (hospitals) => hospitals.id === id,
  );
  if (foundHospitalId >= 0) {
    offlineHospitals[foundHospitalId] = hospital;
    await AsyncStorage.setItem(
      'offlineHospitals',
      JSON.stringify(offlineHospitals),
    );
    return hospital;
  }
  addOffLineHospital(offlineHospitals, hospital);
  return hospital;
};

export const getHospital = createAsyncThunk(
  'hospital/getHospital',
  async (payload) => {
    try {
      if (isConnected) {
        return onlineHospital(payload.id);
      }
      return offlineHospital(payload.id);
    } catch (error) {
      return error;
    }
  },
);
