const fetchCart = user => {
    return dispatch => {
        dispatch({type: "START_CART_FETCH_REQUEST"})
        fetch(`http://localhost:3001/users/${user.id}/carts/1`)
        .then(resp => resp.json())
        .then(cart => 
            dispatch({type: "FETCH_CART", cart})
        )
    }
}

export default fetchCart