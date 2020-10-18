function itemsReducer(state = { items: [], requesting: false, edit_item: {} }, action) {
    switch (action.type) {
   
      case 'START_ADDING_ITEMS_REQUEST':
        return {
          ...state,
          items: [...state.items].sort((a, b) => b.id - a.id),
          requesting: true
        }
    case 'START_ADDING_ITEM_REQUEST':
        return {
            ...state,
            items: [...state.items].sort((a, b) => b.id - a.id),
            requesting: true
        }
   
      case 'ADD_ITEMS':
        return {
          ...state,
          items: [...action.items].sort((a, b) => b.id - a.id),
          requesting: false
        }
    case 'ADD_ITEM':
        return {
            ...state,
            items: [...state.items, action.item].sort((a, b) => b.id - a.id),
            requesting: false
    }
    case 'START_ADDING_PHOTO_REQUEST':
      return {
          ...state,
          requesting: true
      }
      
    case 'UPDATE_ITEMS':
      return {
        ...state,
          items: [...action.items].sort((a, b) => b.id - a.id),
          requesting: false
      }
      case 'START_UPDATE_ITEM_REQUEST':
        return {
          ...state,
          items: [...state.items].sort((a, b) => b.id - a.id),
          requesting: true
        }
        case 'UPDATE_ITEM':
      return {
          ...state,
          items: [...action.updated_items].sort((a, b) => b.id - a.id),
          requesting: false
      }
      case 'START_ITEM_DELETE_REQUEST':
        return {
          ...state,
          items: [...state.items].sort((a, b) => b.id - a.id),
          requesting: true
        }
        case 'DELETE_ITEM':
      return {
        ...state,
          items: [...action.updated_items].sort((a, b) => b.id - a.id),
          requesting: false
      }
      
   
      default:
        return state;
    }
  };


  export default itemsReducer