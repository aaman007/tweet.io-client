import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
}

const tweetSlice = createSlice({
    name: 'tweet',
    initialState: INITIAL_STATE,
    reducers: {
    }
});

export const tweetActions = tweetSlice.actions;

export default tweetSlice;