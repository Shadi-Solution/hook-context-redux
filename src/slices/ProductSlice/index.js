import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS from "./data";

const initialState = {
  products: PRODUCTS,
};

const ProductSlice = createSlice({
  // name and reducer name is not same.
  name: "products",
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    addProduct: (state, payload) => {},
  },
});

export const { addProduct } = ProductSlice.actions;

export const productSelector = (state) => state.products;

export default ProductSlice.reducer;
