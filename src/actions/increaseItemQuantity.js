const increaseItemQuantity = (item, quantity) => {
    
    return dispatch => {
       const qtys = {
           name: item.name,
           qty: quantity
       }
       dispatch({type: "INCREASE_QUANTITY", qtys})
    }
}


export default increaseItemQuantity