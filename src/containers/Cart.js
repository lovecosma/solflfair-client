import { v4 as uuidv4 } from 'uuid';
import fetchCartItems from '../actions/fetchCartItems'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchCart from '../actions/fetchCart'
import CartItemCard from '../components/CartItemCard'
import increaseItemQuantity from '../actions/increaseItemQuantity'

export class Cart extends Component {
    
     getOccurrence(array, value) {
        const new_array = array.filter(item => item === value)
        return new_array.length;
    }
    
                            
    componentDidMount = () => {
        const user = this.props.usersReducer.user
        this.props.fetchCart(user)
        this.props.fetchCartItems(user)
        }

     render() {
         const items = this.props.cartItemsReducer.cartItems
         const displayedItems = []
            if(items.length > 1){

                const itemCards = items.map(item => {
                    displayedItems.push(item.name)
                    const qty = this.getOccurrence(displayedItems, item.name)
                    if(qty < 2){
                       return <CartItemCard item={item}/>
                    }
                })
            return <div>{ itemCards }</div>
            }else{
               
                return (
                    <div>
                        <h1>Nothing to show</h1>
                    </div> 
                )

            }
         }
     }

 const mapStateToProps = state => {
     return state
 }
 
 export default connect(mapStateToProps, { fetchCart, fetchCartItems, increaseItemQuantity })(Cart)
 