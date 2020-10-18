
const addItem = (itemStuff) => {
    debugger
    return dispatch => {
    dispatch({ type: 'START_ADDING_ITEMS_REQUEST' })
    const itemData = {
        item : {
            name: itemStuff.name,
            price: itemStuff.price,
            description: itemStuff.description
        }
    }
     const configObj = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(itemData)
     }
    fetch('http://localhost:3001/items', configObj)
    .then(resp => resp.json())
    .then(item => {
        dispatch({type: 'ADD_ITEM', item})
        if(itemStuff.photo){
        const formData = new FormData();
        formData.append("file", itemStuff.photo);
        formData.append("item_id", item.id)
        dispatch({type: "'START_ADDING_PHOTO_REQUEST'"})
            fetch(`http://localhost:3001/photos`, {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(items => {
                    dispatch({type: "UPDATE_ITEMS", items})
                });
            }
        })
        
    }
}

export default addItem