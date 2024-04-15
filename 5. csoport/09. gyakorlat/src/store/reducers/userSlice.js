import { createSlice } from "@reduxjs/toolkit";
import { exampleTracks } from "../../domain/track";

const initialState =  {
    user: null,
    isLoggedIn: false,
    img: null, 
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        login : (state, {payload}) => {
            state.user = payload.user
            state.img = payload.img
            state.isLoggedIn = true
        },
        logout : (state) => {
            state.user = null
            state.isLoggedIn = false
        }
    }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer