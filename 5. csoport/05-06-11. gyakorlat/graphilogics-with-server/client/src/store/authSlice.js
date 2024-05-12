import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    initialState: {data: []},
    name: 'auth',
    reducers: {
        login: (state, action) => {
            state.data = action.payload
        }
    }
});

export const { login } = authSlice.actions;
export default authSlice.reducer;