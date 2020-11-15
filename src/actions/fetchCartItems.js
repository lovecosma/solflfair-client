const fetchCartItems = user => {
        return dispatch => {
        dispatch({type: "START_FETCH_CART_ITEMS_REQUEST"})
        fetch(`https://solflair-api.herokuapp.com/users/${user.id}/cart_items`)
            .then(resp => resp.json())
            .then(cartItems => {
                dispatch({type: "FETCH_CART_ITEMS", cartItems})
            })
            .catch(error => alert(error)) 
        }
}

export default fetchCartItems