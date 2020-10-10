import React from 'react'
import { combineReducers } from 'redux'
import itemsReducer from './itemsReducer'
import usersReducer from './usersReducer'



const rootReducer = combineReducers({
    itemsReducer,
    usersReducer, 
})

export default rootReducer