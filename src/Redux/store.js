import { configureStore } from "@reduxjs/toolkit";
import sneacers from "./sneacers";
import cart from "./cart";

const store = configureStore({
  reducer: {
    images: sneacers,
    cart: cart,
  },
});

export default store;
