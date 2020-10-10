
const userLogin = user => {
    return dispatch => {
        dispatch({ type: 'START_ADDING_USER_REQUEST' })
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
        fetch('http://localhost:3001/login', configObj)
        .then(resp => resp.json())
        .then(session => {
            if (session.status === 200) {
              localStorage.setItem('user', JSON.stringify(session.user))
              dispatch({type:"LOGIN", user: session.user})
            } else {
                console.log(user.errors)
            }
          })
          .catch(error => console.log('api errors:', error))
        };
    }

export default userLogin