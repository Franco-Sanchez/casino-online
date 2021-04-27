import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    amount: 99.99
  },
  reducers: {}
});

// export const {  } = gameSlice.actions; 

export default gameSlice.reducer;