
const createUser = user => {
    return dispatch => {
        dispatch({ type: 'START_CREATING_USER_REQUEST' })
        const formData = {
                user
            }
         const configObj = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(formData)
         }
        fetch('http://localhost:3001/users', configObj)
        .then(resp => resp.json())
        .then(user => {
            if (user.status === 'created') {
              dispatch({type:"LOGIN", user})
            } else {
                console.log(user.errors)
            }
          })
          .catch(error => console.log('api errors:', error))
        };
    }

export default createUser