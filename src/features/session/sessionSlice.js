import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('user');
    }
  }
});

export const { login, logout } = sessionSlice.actions; 

export default sessionSlice.reducer;