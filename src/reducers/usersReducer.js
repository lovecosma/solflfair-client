function usersReducer(state = { isLoggedIn: false, user: {},  requesting: false } , action) {
    switch (action.type) {

    case 'START_ADDING_USER_REQUEST':
        return {
            ...state,
            requesting: true
        }
        
    case 'LOGIN':
        return {
            isLoggedIn: true,
            user: action.user,
            requesting: false
    }

    case 'LOGOUT':
        return {
            isLoggedIn: false,
            user: {},
            requesting: false
    } 
      default:
        return state;
    }
  };


  export default usersReducer