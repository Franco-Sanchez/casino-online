import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    amount: JSON.parse(localStorage.getItem('amount')) || 99.99,
    records: JSON.parse(localStorage.getItem('records')) || [], 
    item: null
  },
  reducers: {
    createGame(state, action) {
      state.amount -= 1;
      state.item = action.payload;
      state.records = [...state.records, state.item];
      localStorage.setItem('amount', JSON.stringify(state.amount));
      localStorage.setItem('records', JSON.stringify(state.records));
    },
    cleanGame(state) {
      state.item = null;
    },
    twoEqualNumbers(state) {
      state.amount += 0.50;
      localStorage.setItem('amount', JSON.stringify(state.amount));
    },
    threeEqualNumbers(state) {
      state.amount += 5;
      localStorage.setItem('amount', JSON.stringify(state.amount));
    },
    hit(state) {
      state.amount += 10;
      localStorage.setItem('amount', JSON.stringify(state.amount));
    }
  }
});

export const { createGame, cleanGame, twoEqualNumbers, threeEqualNumbers, hit } = gameSlice.actions; 

export default gameSlice.reducer;