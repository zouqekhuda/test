import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user-reducer'
import locationReducer from './reducers/location-reducer'

export const store = configureStore({
  reducer: {
    userReducer,
    locationReducer,
  },
})