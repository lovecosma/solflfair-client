const deleteItem = item => {
    return dispatch => {
        const configObj = {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        }
        dispatch({type: 'START_ITEM_DELETE_REQUEST'})
        fetch(`http://localhost:3001/items/${item.id}`, configObj)
        .then(resp => resp.json())
        .then(updated_items => {
            dispatch({type: 'DELETE_ITEM', updated_items})
        })
    
    }
}

export default deleteItem