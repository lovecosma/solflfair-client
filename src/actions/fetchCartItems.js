const fetchCartItems = user => {
        return dispatch => {
        dispatch({type: "START_FETCH_CART_ITEMS_REQUEST"})
        fetch(`http://localhost:3001/users/${user.id}/cart_items`)
            .then(resp => resp.json())
            .then(cartItems => {
                dispatch({type: "FETCH_CART_ITEMS", cartItems})
            })
            .catch(error => console.log(error)) 
        }
}

export default fetchCartItems