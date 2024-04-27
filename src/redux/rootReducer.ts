import { combineReducers } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import persistConfig from './persistConfig'
import sidebarReducer from './slices/sidebarSlice'

const rootReducer = combineReducers({
  sidebar: sidebarReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
