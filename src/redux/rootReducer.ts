import persistReducer from 'redux-persist/es/persistReducer'

import { combineReducers } from '@reduxjs/toolkit'

import showsReducer from './slices/showsSlice'
import sidebarReducer from './slices/sidebarSlice'
import persistConfig from './persistConfig'

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  shows: showsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
