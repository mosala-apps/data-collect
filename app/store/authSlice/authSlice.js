import { createSlice } from '@reduxjs/toolkit';
import { login} from "./authAsyncQuerie"
const initialState = {
  user: {},
  isLoading: false,
  isAuthenticated: false,
  isLogout: false,
  authError: false,
  userRoles: [],
  lastDateAuth: null,
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(login.pending, (state)=>{
      state.isLoading = true
    }),
    builder.addCase(login.fulfilled, (state, {payload})=>{
      state.isLoading = false
      state.isAuthenticated = true
      state.authError = false
      state.lastDateAuth = new Date()
      state.user = payload.user
    }),
    builder.addCase(login.rejected, (state)=>{
      state.isLoading = false
      state.authError = true
    })

  }
});

const { reducer, actions} = authSlice
export default reducer