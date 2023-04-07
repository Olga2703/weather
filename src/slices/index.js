import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./citiesSlice.js";
export default configureStore({
  reducer: {
    cities: citiesReducer,
  },
});
