import { createSlice } from '@reduxjs/toolkit';
import { getHospital } from './hospitalAsyncQuerie';

const HospitalSlice = createSlice({
  name: 'hospital',
  initialState: {
    hospital: {},
    isLoading: false,
    hospitalError: '',
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
      state.hospitalError = payload;
      state.isLoading = false;
    },
  },
});

export default HospitalSlice.reducer;
