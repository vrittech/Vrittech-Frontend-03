import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from '../slice/authSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({

    auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)


export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store)

