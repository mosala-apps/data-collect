import { createSlice } from '@reduxjs/toolkit'

const FormSlice = createSlice({
  name: 'form',
  initialState: {
    form: [],
    isLoading: false,
  },
  extraReducers: {},
})

export default FormSlice.reducer
