function cartsReducer(state = { cart: {}, requesting: false }, action) {
    switch (action.type) {
   
      case 'START_CART_FETCH_REQUEST':
        return {
          ...state,
          cart: {...state.cart},
          requesting: true
        }
      case 'FETCH_CART':
        return {
          ...state,
          cart: action.cart,
          requesting: false
        }
      default:
        return state;
    }
  };


  export default cartsReducer