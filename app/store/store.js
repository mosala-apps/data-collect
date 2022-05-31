import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './authSlice/authSlice'
import FormSlice from './form/formSlice'
export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    form: FormSlice,
  },
})
