const updateItem = item => {
   return dispatch => {
        const formData = {
            item : {
                name: item.name,
                price: item.price,
                description: item.description
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
        dispatch({type: "START_UPDATE_ITEM_REQUEST"})
        fetch(`https://solflair-api.herokuapp.com/items/${item.id}`, configObj)
        .then(resp => resp.json())
        .then(updated_items => {
            dispatch({type: 'UPDATE_ITEM', updated_items})
        })
        if(item.photo){
            const formData = new FormData();
            formData.append("file", item.photo);
            formData.append("item_id", item.id)
            dispatch({type: "'START_ADDING_PHOTO_REQUEST'"})
                fetch(`https://solflair-api.herokuapp.com/photos`, {
                    method: "POST",
                    body: formData
                })
                    .then(res => res.json())
                    .then(items => {

                        dispatch({type: "UPDATE_ITEMS", items})
                    });
                }
   } 
}

export default updateItem