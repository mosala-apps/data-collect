import { createSlice } from '@reduxjs/toolkit'
import { getAllFormFiltered } from './formAsyncQueries'

const FormSlice = createSlice({
  name: 'form',
  initialState: {
    form: [],
    isLoading: false,
  },
  extraReducers: {
    [getAllFormFiltered.pending]: (state) => {
      state.isLoading = true
    },
    [getAllFormFiltered.fulfilled]: (state, { payload }) => {
      state.form = payload
      state.isLoading = false
    },
    [getAllFormFiltered.rejected]: (state, { payload }) => {
      state.form = payload
      state.isLoading = false
    },
  },
})

export default FormSlice.reducer
