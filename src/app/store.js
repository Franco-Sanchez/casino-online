import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from '../features/session/sessionSlice';
import gameReducer from '../features/game/gameSlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
    game: gameReducer
  }
})

export default store;