import { createSlice } from "@reduxjs/toolkit";
import { exampleTracks } from "../../domain/track";


const userSlice = createSlice({
    name: 'user',
    initialState: {
       username: null,
       isLoggedIn: false,
    },
    reducers : {
        login: (state, {payload}) => {
            state.username = payload
            state.isLoggedIn = true
        },
    }
})

export const { login } = userSlice.actions

export default userSlice