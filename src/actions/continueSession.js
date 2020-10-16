const continueSession = user => {
    return dispatch => { 
        dispatch({type: 'START_ADDING_USER_REQUEST'})
        dispatch({type:"LOGIN", user})
    }
}

export default continueSession