import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    theme: 'light',
    alert: null
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: INITIAL_STATE,
    reducers: {
        setAlert: (state, action) => {
            state.alert = action.payload;
        },

        clearAlert: (state, action) => {
            state.alert = null;
        },

        toggleTheme: (state, action) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;