import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchCartItems from '../actions/fetchCartItems'

 class Cart extends Component {

    componentDidMount = () => {
        fetchCartItems(this.props.state.usersReducer.user)
    }

    render() {
        console.log(this.props.state.cartsReducer.cart)
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, { fetchCartItems })(Cart)
