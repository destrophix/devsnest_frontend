import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./slices/productListSlice";
import cartListSlice from "./slices/cartListSlice";

const store = configureStore({
  reducer: {
    products: productListSlice,
    cartProducts: cartListSlice,
  },
});

export default store;
