import searchReducer from "./redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { searchReducer },
});

export default store;
