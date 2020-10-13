const addItemToCart = (user, item, cart, history) => {
    return dispatch => {
        const formData = {
            cart_item: {
                name: item.name,
                price: item.price,
                cart_id: cart.id
            }
        }
        debugger
        const configObj = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(formData)
         }
        dispatch({type: "START_ADD_TO_CART_REQUEST"})
        fetch(`http://localhost:3001/users/${user.id}/carts/1/cart_items`, configObj)
        .then(resp => resp.json())
        .then(cartItem => {
            dispatch({type: "'ADD_ITEM_TO_CART'", item})
            history.push('/cart')
        })
    }
}


export default addItemToCart