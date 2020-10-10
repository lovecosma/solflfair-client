const addItem = (item) => {
    return dispatch => {
    dispatch({ type: 'START_ADDING_ITEMS_REQUEST' })
     const configObj = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(item)
     }
    fetch('http://localhost:3001/items', configObj)
    .then(resp => resp.json())
    .then(item => dispatch({type: 'ADD_ITEM', item}))
    }
}

export default addItem