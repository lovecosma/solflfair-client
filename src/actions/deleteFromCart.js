const deleteFromCart = (item, cart) => {

    return dispatch => {
        const formData = {
            cart : {
                item_ids: item.id
            }
        }
        const configObj = {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(formData)
         }
        dispatch({type: "START_ADD_TO_CART_REQUEST"})
        fetch(`http://localhost:3001/users/${cart.user_id}/carts/${cart.id}/remove`, configObj)
        .then(resp => resp.json())
        .then(cart => dispatch({type: "REMOVE_ITEM_FROM_CART", cart}))
    }
}

export default deleteFromCart