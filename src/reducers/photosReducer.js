function photosReducer(state = { photos: [],  requesting: false } , action) {
    switch (action.type) {

    case 'BEGIN_CREATE_PHOTO':
        return {
            ...state,
            requesting: true
        }
        
    case 'CREATE_PHOTO':
        return {
            photos: [...state.photos, action.photo],
            requesting: false
    }

      default:
        return state;
    }
  };


  export default photosReducer