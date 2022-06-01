import { createSlice } from '@reduxjs/toolkit';
import { addHospitalManagerNames } from './hospitalManagerNameAsyncQuerie';

const HospitalManagerName = createSlice({
  name: 'hospitalManagerName',
  initialState: {
    name: '',
    firstName: '',
    isUpdated: false,
    isUpdating: false,
    isLoading: false,
    hospitalManagerNameError: false,
  },
  reducers: {
  },
  extraReducers: {
    [addHospitalManagerNames.pending]: (state) => {
      state.isUpdating = true;
    },
    [addHospitalManagerNames.fulfilled]: (state, { payload }) => {
      state.isUpdating = false;
      state.name = payload.name;
      state.firstName = payload.firstName,
      state.isUpdated = true;
    },
    [addHospitalManagerNames.rejected]: (state) => {
      state.isLoading = false;
      state.hospitalManagerNameError = true;
    },
  },
});
export default HospitalManagerName.reducer;
