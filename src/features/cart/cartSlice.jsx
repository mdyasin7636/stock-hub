import { createSlice } from "@reduxjs/toolkit";
const initialState = {
      cartItems: localStorage.getItem("cart-items") ? JSON.parse(localStorage.getItem("cart-items")) : [],
      quantityAmount: 0,
      totalQuantity: 0
}

export const cartSlice = createSlice({
      name: "cart",
      initialState,
      reducers: {
            addToCart: (state, action) => {
                  const index = state.cartItems.findIndex(item => item._id === action.payload._id)
                  if (index > -1) {
                        state.cartItems[index].quantity += 1
                  }
                  else {
                        const updateCart = { ...action.payload, quantity: 1 }
                        state.cartItems.push(updateCart)
                  }
                  localStorage.setItem("cart-items", JSON.stringify(state.cartItems))
            },
            removeFromCart: (state, action) => {
                  const remainingItem = state.cartItems.filter(item => item._id !== action.payload)
                  state.cartItems = remainingItem
            }
      }
})

export const { addToCart , removeFromCart} = cartSlice.actions
export default cartSlice.reducer