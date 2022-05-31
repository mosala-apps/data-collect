import { createAsyncThunk } from '@reduxjs/toolkit';
import apiURL from '../../config/apiURL';

export const getForms = createAsyncThunk(
  'form/getForms',
  async (payload, thunkAPI) => {
    try {
      const forms = await (
        await apiURL.get(`/hospitals-data/${payload.id}`)
      ).data;
      return forms;
    } catch (error) {
      return error;
    }
  },
);
