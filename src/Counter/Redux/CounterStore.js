import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Adjust path as necessary

const CounterStore = configureStore({
  reducer: {
    counter: counterReducer, // Ensure the key matches what your components expect
  },
});

export default CounterStore;
