import React, {Component} from 'react'
import { connect } from 'react-redux'
import addItemToCart from '../actions/addItemToCart'

class ItemCard extends Component{

    addItem = () => {
        const user = JSON.parse(localStorage.getItem("user"))
        this.props.addItemToCart(user, this.props.item, this.props.cart)
        this.props.history.push('/cart')
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
