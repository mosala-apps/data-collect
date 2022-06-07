import { createSlice } from '@reduxjs/toolkit'
import { notificationsHospital } from './notificationAsyncQuerie'

const NotificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notifications: [],
    isLoading: false,
    notificationError: '',
  },
  reducers: {},
  extraReducers: {
    [notificationsHospital.pending]: (state) => {
      state.isLoading = true
    },
    [notificationsHospital.fulfilled]: (state, { payload }) => {
      state.notifications = [...payload]
      state.isLoading = false
    },
    [notificationsHospital.rejected]: (state, { payload }) => {
      state.notificationError = payload
      state.isLoading = false
    }
  },
})

export default NotificationSlice.reducer
