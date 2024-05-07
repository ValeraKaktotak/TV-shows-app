import persistReducer from 'redux-persist/es/persistReducer'

import { combineReducers } from '@reduxjs/toolkit'

import sidebarReducer from './slices/sidebarSlice'
import persistConfig from './persistConfig'

const rootReducer = combineReducers({
  sidebar: sidebarReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
