import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productsService from './productsService'

const initialState = {
  products: [],
  product: [],
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

export const getProduct = createAsyncThunk('products/getProduct', async (id, { rejectWithValue }) => {
  try {
    return await productsService.getProduct(id);
  } catch(err) {
    return rejectWithValue(err.message)
  }
})

export const addProduct = createAsyncThunk('products/addProduct', async (product, { rejectWithValue }) => {
  try {
    return await productsService.addProduct(product)
  } catch(err) {
    return rejectWithValue(err.message)
  }
})

export const productsSlice = createSlice({ 
  name: 'products',
  initialState,
  reducers: {
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
      .addCase(getProduct.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = [...state.products, action.payload]
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  }
})

export const { reset } = productsSlice.actions

export default productsSlice.reducer