const updateItem = item => {
   return dispatch => {
        const formData = {
            item : {...item}
        }
        const configObj = {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(formData)
         }
        dispatch({type: "START_UPDATE_ITEM_REQUEST"})
        fetch(`http://localhost:3001/items/${item.id}`, configObj)
        .then(resp => resp.json())
        .then(updated_items => {
            dispatch({type: 'UPDATE_ITEM', updated_items})
        })
   } 
}

export default updateItem