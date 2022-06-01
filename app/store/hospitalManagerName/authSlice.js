
import { createSlice } from '@reduxjs/toolkit';
import { login, logout } from './authAsyncQuerie';

const AuthSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    hospitalManagerName:{
      name:'',
      firstName: '',
      isUpdated: false,
    },
    isLoading: false,
    isAuthenticated: false,
    isLogout: false,
    authError: false,
    lastDateAuth: null,
  },
  reducers: {
    setUser: (state, {payload}) =>{
      state.user = payload;
    },
    addHospitalManagerNames(state,{payload}) =>{
      state.hospitalManagerName.name = payload.name
    }
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.authError = false;
      // state.lastDateAuth = new Date();
      state.user = payload.user ?? {};
    },
    [login.rejected]: (state) => {
      state.isLoading = false;
      state.authError = true;
    },
    [logout.pending]: (state) => {
      state.isLoading = true;
    },
    [logout.fulfilled]: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false,
      state.isLogout = true,
      state.user = null,
      state.authError = false,
      state.lastDateAuth = null;
    }
  },
});
export const { setUser } = AuthSlice.actions;
export default AuthSlice.reducer;
