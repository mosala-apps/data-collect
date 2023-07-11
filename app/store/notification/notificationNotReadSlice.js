import { createSlice } from '@reduxjs/toolkit'
import {  getNotificationNotRead } from './notificationAsyncQuerie'

const NotificationNotReadSlice = createSlice({
  name: 'notificationNotRead',
  initialState: {
    notificationNotReads: [],
    isLoadingNotRead: false,
    notificationErrorNotRead: ''
  },
  reducers: {},
  extraReducers: {
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
  }
})

export default NotificationNotReadSlice.reducer