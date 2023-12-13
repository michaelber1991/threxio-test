import { Product } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./states";

export interface AppStore {
  products: Product[];
}

export default configureStore<AppStore>({
  reducer: {
    products: productSlice.reducer,
  },
});
