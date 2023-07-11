import { createSlice } from '@reduxjs/toolkit'

const CountConflictFormSlice = createSlice({
  name: 'countConflictFormSlice',
  initialState: {
    countConflict: 0
  },

  reducers: {
    setCountConflict: (state, {payload}) =>{
      state.countConflict += payload;
    }
  },
})

export const { setCountConflict } = CountConflictFormSlice.actions;
export default CountConflictFormSlice.reducer