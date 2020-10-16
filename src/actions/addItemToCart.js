const getOccurence = (array, value) => {
    
}


const addItemToCart = (user, item, cart) => {
    const item_names = cart.map(i => i.name)
    const contained = item_names.includes(item.name)
    if (contained) {
        return dispatch => {
            const contained_item = cart.find(i => i.name === item.name )
            const formData = {
                cart_item: {
                    quantity: contained_item.quantity + 1
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
            fetch(`http://localhost:3001/users/${user.id}/cart_items/${contained_item.id}`, configObj)
            .then(resp => resp.json())
            .then(cartItems => {
                dispatch({type: 'UPDATE_ITEM_QUANTITY', cartItems})
            })
        }
    } else {
        return dispatch => {
            const formData = {
                cart_item: {
                    name: item.name,
                    price: item.price,
                    photo: item.photo,
                    quantity: 1,
                    user_id: user.id
                }
            }
            const configObj = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(formData)
             }
            dispatch({type: "START_CART_ADD_ITEM"})
            fetch(`http://localhost:3001/users/${user.id}/cart_items`, configObj)
            .then(resp => resp.json())
            .then(cartItem => {
                console.log(cartItem);
                dispatch({type: 'ADD_CART_ITEM', cartItem})
            })
        }   
    }
}


export default addItemToCart