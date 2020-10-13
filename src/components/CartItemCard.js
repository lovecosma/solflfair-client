import React, { Component } from 'react'
import { connect } from 'react-redux'
import deleteFromCart from '../actions/deleteFromCart'

 class CartItemCard extends Component {

    deleteFromCart = () => {
        
    }

    render() {
        return (
            <div>
                <h2>{ this.props.item.name }</h2>
                <p>Qty: { this.props.quantity }</p>
                <p> { this.props.item.price } </p>
                <button onClick={this.deleteFromCart}>Remove from Cart</button>
            </div>
        )
    }
}

export default connect(null, { deleteFromCart })(CartItemCard)

