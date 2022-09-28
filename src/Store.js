import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "./Slice";

const Store = configureStore({
  reducer: {
    dashboard:detailSlice
  },
});

export default Store;
