import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
  items: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return { ...state, cart: [ ...state.cart, action.payload ], items: state.cart.length+1 }
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload)
      state.items = state.cart.length;
    },
    calculateTotals: (state, action) => {
      let totals = 0;
      state.cart.forEach(item => {
        totals += Number(item.total)
      })
      state.total = totals;
    },
    reset: (state) => initialState
  }
})

export const { addToCart, deleteFromCart, calculateTotals, reset } = cartSlice.actions

export default cartSlice.reducer