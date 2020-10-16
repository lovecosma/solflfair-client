
const createUser = user => {
    return dispatch => {
        dispatch({ type: 'START_CREATING_USER_REQUEST' })
        const formData = {
          user:{
            ...user,
            admin: false
          }
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
              const current_user = user.user
             localStorage.setItem('user', JSON.stringify(current_user))
              dispatch({type:"LOGIN", current_user})
            } else {
                console.log(user.errors)
            }
          })
          .catch(error => console.log('api errors:', error))
        };
    }

export default createUser