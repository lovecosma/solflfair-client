const continueSession = user => {
    return dispatch => { 
        dispatch({type: 'START_ADDING_USER_REQUEST'})
        dispatch({type:"LOGIN", user: user})
    }
}

export default continueSession