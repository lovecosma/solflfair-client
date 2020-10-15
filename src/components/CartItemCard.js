import React, { Component } from 'react'
import { connect } from 'react-redux'
import deleteFromCart from '../actions/deleteFromCart'
import addItemToCart from '../actions/addItemToCart'

 class CartItemCard extends Component {

    state = {
        user:  JSON.parse(localStorage.getItem("user"))
    }

    deleteFromCart = () => {
        this.props.deleteFromCart(this.state.user, this.props.cartItem)
    }

    addDuplicate = () => {
       this.props.addItemToCart(this.state.user, this.props.cartItem, this.props.cart) 
    }

    render() {
       return (
           <div>
               <h1>{this.props.cartItem.name}</h1>
               <p>Qty: {this.props.cartItem.quantity}</p>
               <button onClick={this.deleteFromCart}>-</button><button onClick={this.addDuplicate}>+</button>
               <p>Price: {(this.props.cartItem.quantity * this.props.cartItem.price).toFixed(2)}</p>
           </div>
       )

    }
}

    const mapStateToProps = state => {
        return state
    }

export default connect(mapStateToProps, { deleteFromCart , addItemToCart})(CartItemCard)

