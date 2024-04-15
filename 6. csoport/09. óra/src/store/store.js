import { configureStore } from "@reduxjs/toolkit";
import tracksSlice from "./actions/tracksSlice";
import userSlice from "./actions/userSlice";

const store = configureStore({
    reducer:{ 
        tracks: tracksSlice.reducer,
        user: userSlice.reducer
    }
})

export default store;