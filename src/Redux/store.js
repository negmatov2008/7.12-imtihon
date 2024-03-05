import { configureStore } from "@reduxjs/toolkit";
import sneacers from "./sneacers";
import cart from "./cart";

const store = configureStore({
  reducer: {
    cart: cart,
  },
});

export default store;
