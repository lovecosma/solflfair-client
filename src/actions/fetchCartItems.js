const fetchCartItems = user => {
    return dispatch => {
        dispatch({type: "START_CART_FETCH_REQUEST"})
        fetch(`http://localhost:30001//users/${user.id}/carts`)
        .then(resp => resp.json)
        .then(cart => dispatch({type: "FETCH_CHART", cart}))
    }
}

export default fetchCartItems