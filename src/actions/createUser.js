
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
        fetch('https://solflair-api.herokuapp.com/users', configObj)
        .then(resp => resp.json())
        .then(user => {
            if (user.status === 'created') {
              const current_user = user.user
             localStorage.setItem('user', JSON.stringify(current_user))
              dispatch({type:"LOGIN", current_user})
            } else {
                alert(user.errors)
            }
          })
          .catch(error => alert('api errors:', error))
        };
    }

export default createUser