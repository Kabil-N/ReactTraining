import {createStore } from 'redux';
import cakeReducer from './cake/cakeReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
  }
   
const persistedReducer = persistReducer(persistConfig, cakeReducer)

const store=createStore(persistedReducer)

export const persistor=persistStore(store);

export default store;
