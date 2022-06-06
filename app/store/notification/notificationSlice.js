import { createSlice } from '@reduxjs/toolkit'
import { notificationsHospital, getNotificationNotRead } from './notificationAsyncQuerie'

const NotificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notifications: [],
    notificationNotReads: [],
    isLoading: false,
    isLoadingNotRead: false,
    notificationError: '',
    notificationErrorNotRead: '',
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
    },
    [getNotificationNotRead.pending]: (state) => {
      state.isLoadingNotRead = true
    },
    [getNotificationNotRead.fulfilled]: (state, { payload }) => {
      state.notificationNotReads = payload
      state.isLoadingNotRead = false
    },
    [getNotificationNotRead.rejected]: (state, { payload }) => {
      state.notificationErrorNotRead = payload
      state.isLoadingNotRead = false
    },
  },
})

export default NotificationSlice.reducer
