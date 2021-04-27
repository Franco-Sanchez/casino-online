import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    amount: JSON.parse(localStorage.getItem("amount")) || 99.99,
    records: JSON.parse(localStorage.getItem("records")) || [],
    item: null,
    result: "Let's go!",
  },
  reducers: {
    createGame(state, action) {
      state.amount -= 1;
      state.item = action.payload;
      state.records = [...state.records, state.item];
      localStorage.setItem("amount", JSON.stringify(state.amount));
      localStorage.setItem("records", JSON.stringify(state.records));
    },
    cleanGame(state) {
      state.item = null;
      state.result = "Let's go!"
    },
    nothing(state) {
      state.result = "Keep trying!";
    },
    twoEqualNumbers(state) {
      state.result = "Win!";
      state.amount += 0.5;
      localStorage.setItem("amount", JSON.stringify(state.amount));
    },
    threeEqualNumbers(state) {
      state.amount += 5;
      state.result = "Amazing! You win";
      localStorage.setItem("amount", JSON.stringify(state.amount));
    },
    hit(state) {
      state.result = "Hit! The jackpot is yours";
      state.amount += 10;
      localStorage.setItem("amount", JSON.stringify(state.amount));
    },
  },
});

export const {
  createGame,
  cleanGame,
  nothing,
  twoEqualNumbers,
  threeEqualNumbers,
  hit,
} = gameSlice.actions;

export default gameSlice.reducer;
