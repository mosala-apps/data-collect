import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './authSlice/authSlice';
export const store = configureStore({
  reducer: {
    auth: AuthSlice
  },
});
