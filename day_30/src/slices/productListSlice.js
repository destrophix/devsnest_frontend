import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk("products/fetchproducts", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
});

const productListSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    increment: (state, action) => {
      const newState = [];
      state.map((product) =>
        newState.push(JSON.parse(JSON.stringify(product)))
      );
      newState[action.payload - 1]["quantity"] += 1;
      return newState;
    },
    decrement: (state, action) => {
      const newState = [];
      state.map((product) =>
        newState.push(JSON.parse(JSON.stringify(product)))
      );
      newState[action.payload - 1]["quantity"] -= 1;
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      action.payload.map((product) => (product["quantity"] = 1));
      return action.payload;
    });
  },
});

export { fetchProducts };
export const { increment, decrement } = productListSlice.actions;
export default productListSlice.reducer;
