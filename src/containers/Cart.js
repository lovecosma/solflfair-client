import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchCart from '../actions/fetchCart'
import ItemCard from '../components/ItemCard'
import DeleteFromCart from '../components/DeleteFromCart'
import { v4 as uuidv4 } from 'uuid';
 class Cart extends Component {

    state = {
        item: [],
        total: null
    }

    componentDidMount = () => {
         const current_user = this.props.state.usersReducer.user
         this.props.fetchCart(current_user)
    }

    render() {
        // const items = this.props.state.cartsReducer.cart.items.map(item => <ItemCard key={item.id} item={item}/>);
        const items = this.props.state.cartsReducer.cart.items
        if(items){
            const itemCards = items.map(item =>
                <div>
                    <ItemCard key={uuidv4()} item={item}/> 
                    <DeleteFromCart key={uuidv4()}item={item}/>
                </div>
            )
        return (
            <div>
                <h1>Your Cart</h1>
                { itemCards }
            </div>
        )
        } else {
            return (
                <div>
                    <h1>Your Cart</h1>
                </div>
            )
        }
        
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}


export default connect(mapStateToProps, { fetchCart })(Cart)
