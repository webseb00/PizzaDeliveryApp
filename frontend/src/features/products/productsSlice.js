import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productsService from './productsService'

const initialState = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const getAllProducts = createAsyncThunk('products/getAll', async (_, { rejectWithValue }) => {
  try {
    return await productsService.getAllProducts();
  } catch(err) {
    return rejectWithValue(err.message)
  }
})

export const productsSlice = createSlice({ 
  name: 'products',
  initialState,
  reducers: {
    getProduct: (state, action) => {
      return state.products.find(product => product.id === action.payload)
    },
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  }
})

export const { reset } = productsSlice.actions

export default productsSlice.reducer