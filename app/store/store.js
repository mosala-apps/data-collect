import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './auth/authSlice'
import FormSlice from './form/formSlice'

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    form: FormSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }),
})
