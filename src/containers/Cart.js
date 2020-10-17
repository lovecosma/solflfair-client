import { v4 as uuidv4 } from 'uuid';
import fetchCartItems from '../actions/fetchCartItems'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItemCard from '../components/CartItemCard'
import increaseItemQuantity from '../actions/increaseItemQuantity'

export class Cart extends Component {


    state = {
        cartItems: this.props.cartItemsReducer.cartItems
    }
    
     getOccurrence(array, value) {
        const new_array = array.filter(item => item === value)
        return new_array.length;
    }
    
                            
    componentDidMount = () => {
        const user = JSON.parse(localStorage.getItem("user"))
        this.props.fetchCartItems(user)
    }
    
    render() {
         if(this.props.cartItemsReducer.requesting){
            return (
                <div>
                    <br></br><br></br>
                    <h2>loading...</h2>
                </div>
            )
         }else{
            const cartItemCards = this.props.cartItemsReducer.cartItems.map(cartItem => <CartItemCard id={uuidv4()}cartItem={cartItem}cart={this.props.cartItemsReducer.cartItems}/>)
             return (
                 <div className={"row"}>
                     <br></br><br></br>
                     {cartItemCards}
                 </div>
             )
         }
    }
}

 const mapStateToProps = state => {
     return state
 }
 
 export default connect(mapStateToProps, { fetchCartItems, increaseItemQuantity })(Cart)
 