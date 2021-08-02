import { createSlice } from "@reduxjs/toolkit";

const cartListSlice = createSlice({
  name: "cartProducts",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      if (state.includes(action.payload - 1)) return state;
      return [...state, action.payload - 1];
    },
    deleteFromCart: (state, action) => {
      return state.filter((ele) => ele !== action.payload - 1);
    },
  },
});

export const { addToCart, deleteFromCart } = cartListSlice.actions;
export default cartListSlice.reducer;
