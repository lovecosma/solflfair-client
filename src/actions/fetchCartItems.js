const getOccurrence = (array, value) => {
    const new_array = array.filter(item => item === value)
    return new_array.length;
}


const fetchCartItems = user => {
        return dispatch => {
        dispatch({type: "START_FETCH_CART_ITEMS_REQUEST"})
        fetch(`http://localhost:3001/users/${user.id}/carts/1/cart_items`)
            .then(resp => resp.json())
            .then(cartItems => {
                dispatch({type: "FETCH_CART_ITEMS", cartItems})
                cartItems.map(item => {
                    const items = cartItems.map(item => item.name)
                    const quantity = getOccurrence(items, item.name)
                    dispatch({type: "INCREASE_QUANTITY", info: {name: item.name, quantity: quantity}})
                   })
            })
            .catch(error => console.log(error)) 
        }
}

export default fetchCartItems