import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../Slice/cartSlice.js";
import cartReducer from '../Slice/cartSlice.js'

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

