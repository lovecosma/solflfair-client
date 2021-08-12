const uploadPhoto = (formData) => {
return dispatch => {
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
}


export default uploadPhoto