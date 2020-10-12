import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DeleteFromCart extends Component {

    handleClick = () => {
        
    }

    render() {
        return (
            <div>
               <button onClick={ this.handleClick }>Remove from Cart</button> 
            </div>
        )
    }
}

export default connect()(DeleteFromCart)
