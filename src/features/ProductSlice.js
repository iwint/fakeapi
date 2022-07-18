import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";

const initialState = {
  products: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts(state, action) {
      state.products = action.payload;
    },
    removeProducts(state, action) {
      state.products = state.products.filter((e, i) => {
        return i !== action.payload;
      });
    },
  },
});

export const getProductsAsync = (products) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    console.log("Data :", response.data);
    dispatch(getProducts(response.data));
  } catch (err) {
    console.log("Error", err);
  }
};

export const { getProducts, removeProducts } = ProductSlice.actions;
export const productSelector = (state) => state.products;

export default ProductSlice.reducer;
