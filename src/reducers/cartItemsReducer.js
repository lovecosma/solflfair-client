function cartItemsReducer(state = { cartItems: {}, requesting: false }, action) {
    switch (action.type) {
      case "START_CART_ITEMS_FETCH_REQUEST":
        return {
          ...state,
          cartItems: [...state.cartItems],
          requesting: true
        }
      case 'FETCH_CART_ITEMS':
        return {
          ...state,
          cartItems: [...action.cartItems],
          requesting: false
        }
        default: 
        return state
    }
}

export default cartItemsReducer