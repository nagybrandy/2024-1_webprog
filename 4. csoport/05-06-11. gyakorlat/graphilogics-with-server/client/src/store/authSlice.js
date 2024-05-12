import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {data: null, loggedIn: false},
    reducers: {
        login(state, action) {
            console.log(action)
            state.data = action.payload
            state.loggedIn = true
        },
        logout(state) {
            state = null
            state.loggedIn = false
        },
    },
})

export const { login, logout } = authSlice.actions
export default authSlice