import { combineReducers } from 'redux'
import itemsReducer from './itemsReducer'
import usersReducer from './usersReducer'
import cartsReducer from './cartsReducer'
import cartItemsReducer from './cartItemsReducer'
import photosReducer from '../reducers/photosReducer'


const rootReducer = combineReducers({
    itemsReducer,
    usersReducer, 
    cartsReducer,
    cartItemsReducer,
    photosReducer
})

export default rootReducer