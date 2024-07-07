import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

export const cartSelector = (store) => store.cart;

export default cartSlice.reducer;
