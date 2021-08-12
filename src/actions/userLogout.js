const userLogout = () => {
    return dispatch => {
        dispatch({ type: 'START_ADDING_USER_REQUEST' })
        const formData = {
                
            }
         const configObj = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(formData)
         }
        fetch('http://localhost:3001/logout', configObj)
        .then(resp => resp.json())
        .then(session => {
            if (session.status === 200) {
              dispatch({type:"LOGOUT"})
              localStorage.removeItem("user")
            } else {
                alert(session.errors)
            }
          })
          .catch(error => alert('api errors:', error))
        };
    }

export default userLogout