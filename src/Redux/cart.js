import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    how: 0,
    defaultPrice: 125.0,
    img: null,
    price: null,
  },
  reducers: {
    addProduct: (state, { payload }) => {
      state.how = payload;
      state.price = state.defaultPrice * payload;
    },
  },
});

export const { addProduct } = CartSlice.actions;
export default CartSlice.reducer;
