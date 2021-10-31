import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/auth";
import uiSlice from "./slices/ui";
import tweetSlice from "./slices/tweet";


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        tweet: tweetSlice.reducer
    },
    devTools: true
});

export default store;