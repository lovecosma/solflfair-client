const addItemToCart = (cart, item, user) => {
    const items = cart.items.map(item => item.id)
    return dispatch => {
        const formData = {
            cart : {
                item_ids: [...items, item.id]
            }
        }
        console.log(formData)
        const configObj = {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(formData)
         }
        dispatch({type: "START_ADD_TO_CART_REQUEST"})
        fetch(`http://localhost:3001/users/${user.id}/carts/1`, configObj)
        .then(resp => resp.json())
        .then(cart => console.log(cart))
    }
}


export default addItemToCart