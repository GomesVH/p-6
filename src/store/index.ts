import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducer/cart'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddlaware) =>
    getDefaultMiddlaware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
