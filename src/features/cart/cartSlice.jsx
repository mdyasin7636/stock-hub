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
                  localStorage.setItem("cart-items", JSON.stringify(state.cartItems))
            },
            decreaseItem: (state, action) => {
                  const index = state.cartItems.findIndex(item => item._id === action.payload._id)
                  if (state.cartItems[index].quantity > 1) {
                        state.cartItems[index].quantity -= 1
                  }
                  else {
                        const remainingItems = state.cartItems.filter(item => item._id !== action.payload._id)
                        state.cartItems = remainingItems
                  }
                  localStorage.setItem("cart-items", JSON.stringify(state.cartItems))
            }, getCartTotal: (state) => {
                  const { total, cartQuantity } = state.cartItems.reduce((cartCalculation, cartItem) => {
                        const { price, quantity } = cartItem
                        const totalPrice = parseFloat(price) * quantity

                        cartCalculation.total += totalPrice
                        cartCalculation.cartQuantity = quantity

                        return cartCalculation
                  },
                        {
                              total: 0,
                              cartQuantity: 0
                        })
                  state.quantityAmount = total
                  state.totalQuantity = cartQuantity

            }
      }
})
export const { addToCart, removeFromCart, decreaseItem , getCartTotal} = cartSlice.actions
export default cartSlice.reducer