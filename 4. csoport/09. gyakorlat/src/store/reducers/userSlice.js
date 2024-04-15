import { createSlice } from '@reduxjs/toolkit'
import { exampleTracks } from '../../domain/track'

const initialState = {
    user: null,
    isLoggedIn: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, { payload }) => {
        state.user = payload
        state.isLoggedIn = true
      },
    logout: (state, { payload }) => {
        state.user = null
        state.isLoggedIn = false
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer