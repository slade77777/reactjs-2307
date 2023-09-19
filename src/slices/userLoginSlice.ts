import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../axiois-instance.ts";

export const login = createAsyncThunk('login',
  async data => {
  const response = await api.get(`/user?name=${data.name}&&password=${data.password}`)
  return response.data;
})

export const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState: {
    name: '',
    password: '',
    id: '',
    isLoginSuccess: false
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.id = action.payload.id;
    }
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      // We can directly add the new post object to our posts array
      if (action.payload.length > 0) {
        state.name = action.payload[0].name;
        state.password = action.payload[0].password;
        state.id = action.payload[0].id;
        state.isLoginSuccess = true;
      } else {
        state.isLoginSuccess = false
      }
    })
  }
})

export const { loginSuccess } = userLoginSlice.actions;
export default userLoginSlice.reducer;
