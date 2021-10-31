import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
    FLUSH, REHYDRATE, PAUSE,
    PERSIST, PURGE, REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { persistStore } from "redux-persist";

import authSlice from "./slices/auth";
import uiSlice from "./slices/ui";
import tweetSlice from "./slices/tweet";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'ui']
}

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    tweet: tweetSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export default store;