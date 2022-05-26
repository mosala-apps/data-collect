import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authSilce/authSlice'
export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
})
