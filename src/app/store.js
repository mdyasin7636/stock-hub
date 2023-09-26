import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/auth/authSlices.jsx"
import cartReducer, { getCartTotal } from "../features/cart/cartSlice.jsx"
import { apiSlice } from './../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

store.dispatch(getCartTotal())