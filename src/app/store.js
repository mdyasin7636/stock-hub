import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/auth/authSlices.jsx"

export const store = configureStore({
  reducer: {
     auth:authReducer
  },
})