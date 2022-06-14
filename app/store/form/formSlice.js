import { createSlice } from '@reduxjs/toolkit';
import apiURL from '../../config/apiURL';

const FormSlice = createSlice({
  name: 'form',
  initialState: {},
  reducers: {},
  extraReducers: {},
});

export const { syncForm } = FormSlice.actions

export default FormSlice.reducer;
