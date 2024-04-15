import { configureStore } from "@reduxjs/toolkit";
import tracksSlice from "./reducers/tracksSlice";
import userSlice from "./reducers/userSlice";

const store = configureStore({
    reducer: {
        tracks: tracksSlice,
        user: userSlice,
    }
})

export default store