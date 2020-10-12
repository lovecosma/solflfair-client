import { combineReducers } from 'redux'
import itemsReducer from './itemsReducer'
import usersReducer from './usersReducer'
import cartsReducer from './cartsReducer'



const rootReducer = combineReducers({
    itemsReducer,
    usersReducer, 
    cartsReducer
})

export default rootReducer