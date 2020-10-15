function cartItemsReducer(state = { cartItems: [], requesting: true, quantities: {} }, action) {
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
        case "START_CART_ADD_ITEM":
        return {
          ...state,
          cartItems: [...state.cartItems],
          requesting: true
        }
        case 'ADD_CART_ITEM':
        return {
          ...state,
          cartItems: [...state.cartItems, action.cartItem],
          requesting: false
        }
        case "START_UPDATE_ITEM_QUANTITY":
        return {
          ...state,
          cartItems: [...state.cartItems],
          requesting: true
        }
        case 'UPDATE_ITEM_QUANTITY':
        return {
          ...state,
          cartItems: [action.cartItems],
          requesting: false
        }
        default: 
        return state
    }
}

export default cartItemsReducer