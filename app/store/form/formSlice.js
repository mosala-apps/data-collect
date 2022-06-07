import { createSlice } from '@reduxjs/toolkit';
import { showForm } from './formAsyncQueries';

const FormSlice = createSlice({
  name: 'form',
  initialState: {},
  extraReducers: {},
});

export default FormSlice.reducer;
