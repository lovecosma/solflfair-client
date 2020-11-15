const deleteFromCart = (user, item) => {
    if (item.quantity > 1) {
        return dispatch => {
            const formData = {
                cart_item : {
                    quantity: item.quantity - 1
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
            dispatch({type: "START_UPDATE_ITEM_QUANTITY"})
            fetch(`https://solflair-api.herokuapp.com/users/${user.id}/cart_items/${item.id}`, configObj)
            .then(resp => resp.json())
            .then(cartItems => {
                dispatch({type: 'UPDATE_ITEM_QUANTITY', cartItems})
            })
        }  
    } else {
        return dispatch => {
            const configObj = {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                  },
             }
            dispatch({type: "START_UPDATE_ITEM_QUANTITY"})
            fetch(`https://solflair-api.herokuapp.com/users/${user.id}/cart_items/${item.id}`, configObj)
            .then(resp => resp.json())
            .then(cartItems => {
                dispatch({type: 'UPDATE_ITEM_QUANTITY', cartItems})
            })
        }
    }
}

export default deleteFromCart