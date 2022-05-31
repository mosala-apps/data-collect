<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './authSlice/authSlice'
import FormSlice from './form/formSlice'
=======
import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './auth/authSlice';
>>>>>>> c31ea9aa6bad18f5fc0b2db58c3a5a0a19f72381
export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    form: FormSlice,
  },
})
