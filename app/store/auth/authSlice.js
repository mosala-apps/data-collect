
import { createSlice } from '@reduxjs/toolkit';
import { login, loginOffline, logout } from './authAsyncQuerie';

const AuthSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isLoading: false,
    isAuthenticated: false,
    isLogout: false,
    authError: false,
    lastDateAuth: null,
  },
  reducers: {
    setUser: (state, {payload}) =>{
      state.user = payload;
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
      state.user = payload.user;
    },
    [login.rejected]: (state) => {
      state.isLoading = false;
      state.authError = true;
    },
    [loginOffline.pending]:(state) =>{
      state.isLoading = true;
    },
    [loginOffline.rejected]: (state) => {
      state.isLoading = false;
      state.authError = true;
    },
    [loginOffline.fulfilled]: (state) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.authError = false;
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
