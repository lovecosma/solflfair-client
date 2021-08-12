const createPhoto = image => {

    return dispatch => {
        const formData = new FormData();
        formData.append("file", image.photo);
        formData.append("title", image.title)
        dispatch({type: "BEGIN_CREATE_PHOTO"})
            fetch("http://localhost:3001/create_photo", {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(photo => {
                    dispatch({type: "CREATE_PHOTO", photo})
                });
    }

}

export default createPhoto