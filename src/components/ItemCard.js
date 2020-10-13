import React, {Component} from 'react'
import { connect } from 'react-redux'
import addItemToCart from '../actions/addItemToCart'

class ItemCard extends Component{

    addItem = () => {
       const user = this.props.usersReducer.user
       const cart = this.props.cartsReducer.cart
       this.props.addItemToCart(user, this.props.item, cart, this.props.history)
    }

    render(){
        const item = this.props.item
        return (
            <div>
                <h2>{ item.name }</h2>
                <p> { item.price } </p>
                <button onClick={this.addItem}>Add To Cart</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}


export default connect(mapStateToProps, { addItemToCart })(ItemCard)
