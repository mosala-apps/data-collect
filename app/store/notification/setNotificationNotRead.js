import { createSlice } from '@reduxjs/toolkit'
import { setNotificationNotRead } from './notificationAsyncQuerie'


const SetNotificationNotReadSlice = createSlice({
  name: 'setNotificationNotRead',
  initialState: {
    notificationRead: {},
    isLoading: false,
    notificationReadError: '',
  },
  reducers: {},
  extraReducers: {
    [setNotificationNotRead.pending]: (state) => {
      state.isLoading = true
    },
    [setNotificationNotRead.fulfilled]: (state, { payload }) => {
      state.notificationRead = payload
      state.isLoading = false
    },
    [setNotificationNotRead.rejected]: (state, { payload }) => {
      state.notificationReadError = payload
      state.isLoading = false
    }
  },
})

export default SetNotificationNotReadSlice.reducer