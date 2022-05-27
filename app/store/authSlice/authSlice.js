import { createSlice } from '@reduxjs/toolkit';
import { login } from './authAsyncQuerie';

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
    userAuthenticating: (state, { payload })=> {
      state.isLoading = payload;
    },
    userErrorAuthenticating: (state, { payload })=> {
      state.authError = payload;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.authError = false;
      //state.lastDateAuth = new Date();
      state.user = payload.user;
    },
    [login.rejected]: (state) => {
      state.isLoading = false;
      state.authError = true;
    },
  },
});
export const { userAuthenticating, userErrorAuthenticating } = AuthSlice.actions
export default AuthSlice.reducer;
