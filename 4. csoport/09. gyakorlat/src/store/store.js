import { configureStore } from '@reduxjs/toolkit'
import tracksSlice from './reducers/tracksSlice'
import userSlice from './reducers/userSlice'

export const store = configureStore({
  reducer: {
    tracks: tracksSlice,
    user: userSlice,
  },
})