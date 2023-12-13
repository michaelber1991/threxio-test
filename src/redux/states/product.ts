import { LocalStorageTypes, Product } from "@/models";
import { setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Product[] = [];

export const productSlice = createSlice({
  name: "product",
  initialState: localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product") as string)
    : initialState,
  reducers: {
    addProduct: (state, action) => {
      setLocalStorage(LocalStorageTypes.PRODUCTS, state);
      return action.payload;
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
