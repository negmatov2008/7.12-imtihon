import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    how: 1,
    cartHow: 0,
    defaultPrice: 125.0,
    img: null,
    price: null,
  },
  reducers: {
    addProduct: (state, { payload }) => {
      state.cartHow = payload;

      state.price = state.defaultPrice * payload;
    },
    addImageProduct: (state, { payload }) => {
      if (!payload == 0) {
        state.how = payload;
      }
    },
  },
});

export const { addProduct, addImageProduct } = CartSlice.actions;
export default CartSlice.reducer;
