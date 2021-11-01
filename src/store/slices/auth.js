import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isLoggedIn: false,
    token: '',
    user: {}
}

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },

        logout: (state, action) => {
            state.isLoggedIn = false;
            state.token = '';
            state.user = {};
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;