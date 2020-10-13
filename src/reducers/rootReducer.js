import { combineReducers } from 'redux'
import itemsReducer from './itemsReducer'
import usersReducer from './usersReducer'
import cartsReducer from './cartsReducer'
import cartItemsReducer from './cartItemsReducer'



const rootReducer = combineReducers({
    itemsReducer,
    usersReducer, 
    cartsReducer,
    cartItemsReducer
})

export default rootReducer