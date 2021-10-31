import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isLoggedIn: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
        },

        logout: (state, action) => {
            state.isLoggedIn = false;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;