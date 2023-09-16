import { configureStore } from '@reduxjs/toolkit'
import userLoginSlice from "./slices/userLoginSlice.ts";
import userChosenListSlice from "./slices/userChosenListSlice.ts";

export default configureStore({
  reducer: {
    userLogin: userLoginSlice,
    userChosenList: userChosenListSlice
  }
})
