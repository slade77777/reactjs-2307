import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../axiois-instance.ts";

export const login = createAsyncThunk('login',
  async data => {
  // @ts-ignore
    const response = await api.get(`/user?name=${data.name}&&password=${data.password}`)
  return response.data;
})

export const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState: {
    name: '',
    password: '',
    id: '',
    isLoginSuccess: false,
    loading: false,
  },
  reducers: {
    showLoading:(state) => {
      state.loading = true
    },
    loginSuccess: (state, action) => {
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.id = action.payload.id;
      state.isLoginSuccess = true;
    },
    logout: (state) => {
      state.isLoginSuccess = false;
      localStorage.removeItem('name');
      localStorage.removeItem('password');
      localStorage.removeItem('id');
      // localStorage.clear();
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

        // save user data into localstorage
        localStorage.setItem('name', action.payload[0].name)
        localStorage.setItem('password', action.payload[0].password)
        localStorage.setItem('id', action.payload[0].id)
      } else {
        state.isLoginSuccess = false
      }
      state.loading = false
    })
  }
})

export const { loginSuccess, logout } = userLoginSlice.actions;
export default userLoginSlice.reducer;
