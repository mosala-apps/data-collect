import { createSlice } from '@reduxjs/toolkit';
import { getHospital } from './formAsyncQuerie';

const FormSlice = createSlice({
  name: 'form',
  initialState: {
    hospital: {},
    isLoading: false,
    formError: '',
  },
  reducers: {},
  extraReducers: {
    [getHospital.pending]: (state) => {
      state.isLoading = true;
    },
    [getHospital.fulfilled]: (state, { payload }) => {
      state.hospital = payload;
      state.isLoading = false;
    },
    [getHospital.pending]: (state, { payload }) => {
      state.formError = payload;
      state.isLoading = false;
    },
  },
});

export default FormSlice.reducer;
