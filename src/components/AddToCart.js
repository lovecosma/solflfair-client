import React, { Component } from 'react'
import { connect } from 'react-redux'
import addItemToCart from '../actions/addItemToCart'

export class AddToCart extends Component {

    addToCart = () => {
     const cart = this.props.state.cartsReducer.cart
     const user = this.props.state.usersReducer.user
     const item = this.props.item
     this.props.addItemToCart(cart, item, user)
    }

    render() {
        return (
            <div>
                <button onClick={this.addToCart}>Add To Cart</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, { addItemToCart })(AddToCart)
