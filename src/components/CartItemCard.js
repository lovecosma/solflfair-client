import React, { Component } from 'react'
import { connect } from 'react-redux'
import deleteFromCart from '../actions/deleteFromCart'

 class CartItemCard extends Component {

    deleteFromCart = () => {
        const user = JSON.parse(localStorage.getItem("user"))
        this.props.deleteFromCart(user, this.props.cartItem)
    }

    render() {
       return (
           <div>
               <h1>{this.props.cartItem.name}</h1>
               <p>Qty: {this.props.cartItem.quantity}</p>
               <button onClick={this.deleteFromCart}>-</button><button>+</button>
               <p>Price: {(this.props.cartItem.quantity * this.props.cartItem.price).toFixed(2)}</p>
           </div>
       )

    }
}

    const mapStateToProps = state => {
        return state
    }

export default connect(mapStateToProps, { deleteFromCart })(CartItemCard)

