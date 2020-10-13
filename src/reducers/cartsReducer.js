function cartsReducer(state = { cart: {}, requesting: false }, action) {
    switch (action.type) {
      case "START_CART_FETCH_REQUEST":
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
        case "START_ADD_TO_CART_REQUEST":
        return {
          ...state,
          cart: {...state.cart},
          requesting: true
        }
        case 'ADD_ITEM_TO_CART':
          return {
            ...state,
            cart: {
              ...state.cart,
              items: [...state.cart.items
                ,action.item]
            },
            requesting: false
          }
          case 'REMOVE_ITEM_FROM_CART':
        return {
            ...state,
            cart: {
                ...state.cart,
                items: [...action.cart.items]
            },
            requesting: false
        }
        // case 'INCREASE_QUANTITY':
        // return {
        //     ...state,
        //     cart: {
        //         ...state.cart,
        //         items: [...action.cart.items]
        //     },
        //     requesting: false
        // }
      default:
        return state;
    }
  };


  export default cartsReducer