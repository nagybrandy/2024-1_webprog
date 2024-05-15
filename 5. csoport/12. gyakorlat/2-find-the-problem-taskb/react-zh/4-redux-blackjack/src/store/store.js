import { configureStore } from '@reduxjs/toolkit'
import game from '../features/counter/counterSlice'
import gameReducer from './gameSlice'

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
})