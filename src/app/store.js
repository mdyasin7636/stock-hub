import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/auth/authSlices.jsx"
import { apiSlice } from './../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})