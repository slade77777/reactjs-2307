import { createSlice } from "@reduxjs/toolkit";

export const userChosenListSlice =  createSlice({
  name: 'userList',
  initialState: {
    value: []
  },
  reducers: {
    addUserToList: (state, action) => {
      console.log(state);
      console.log(action);
      // @ts-ignore
      state.value = [...state.value, action.payload];
    }
  }
})

export const { addUserToList } = userChosenListSlice.actions;
export default userChosenListSlice.reducer;
