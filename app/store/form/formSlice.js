import { createSlice } from '@reduxjs/toolkit'
import { getForms } from './formAsyncQuerie'

const FormSlice = createSlice({
  name: 'form',
  initialState: {
    forms: {},
    isLoading: false,
    formError: '',
  },
  reducers: {},
  extraReducers: {
    [getForms.pending]: (state) => {
      state.isLoading = true
    },
    [getForms.fulfilled]: (state, { payload }) => {
      state.forms = payload
      state.isLoading = false
    },
    [getForms.pending]: (state, { payload }) => {
      state.formError = payload
      state.isLoading = false
    },
  },
})

export default FormSlice.reducer
