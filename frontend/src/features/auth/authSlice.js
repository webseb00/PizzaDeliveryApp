import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
  isAuth: null,
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: ''
}

export const login = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
  try {
    return await authService.login(data)
  } catch(err) {
    return rejectWithValue(err.response.data.msg)
  }
})

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    return await authService.logout()
  } catch(err) {
    return rejectWithValue(err.response.data.msg)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuth = true;
        state.isError = false;
        state.message = '';
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isAuth = null;
        state.isSuccess = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuth = null;
        state.isLoading = false;
        state.isError = false;
        state.message = '';
        state.isSuccess = true;
      })
  }
})

export const { reset } = authSlice.actions

export default authSlice.reducer

