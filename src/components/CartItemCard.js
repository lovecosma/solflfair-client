import React, { Component } from 'react'
import { connect } from 'react-redux'
import deleteFromCart from '../actions/deleteFromCart'

 class CartItemCard extends Component {

    deleteFromCart = () => {
        
    }

    render() {
        const qty = this.props.cartItemsReducer.quantities
        return (
            <div>
                <h2>{ this.props.item.name }</h2>
                <p>Qty: {qty[this.props.item.name]}</p>
                <p> { this.props.item.price } </p>
                <button onClick={this.deleteFromCart}>Remove from Cart</button>
            </div>
        )
    }
}

    const mapStateToProps = state => {
        return state
    }

export default connect(mapStateToProps, { deleteFromCart })(CartItemCard)

