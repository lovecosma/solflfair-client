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
        const cartItem = this.props.cartItem
        if (this.props.cartItem.photo) {
            return (
                <div >
                    <div className="card-panel hoverable body">
                    <div className="container">
                    <div>
                        <div>
                            <span className="card-title"><h3>{ cartItem.name }</h3><img src={cartItem.photo} alt="" width="250" height="300"></img><br></br></span>
                        </div>
                        <div className="card-panel  black white-text" >
                        <p>Price: {(this.props.cartItem.quantity * this.props.cartItem.price).toFixed(2)}</p>
                        <p>Qty: {this.props.cartItem.quantity}</p>
                        <p style={{overflow: 'auto'}} >I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                    <div className="card-action">
                    <button className={"waves-effect waves-light black text-white btn"} onClick={this.deleteFromCart}>-</button><button onClick={this.addDuplicate} className={"waves-effect waves-light black text-white btn"}>+</button>
                    </div>

                </div>
                    <br></br>
                    <br></br>
                  </div>
                </div>
          
            ) 
        } else {
            return (
                <div class="col s12 m6 l3">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title"><h2>{ cartItem.name }</h2></span>
                    <p>Price: {(this.props.cartItem.quantity * this.props.cartItem.price).toFixed(2)}</p>
                    <p>Qty: {this.props.cartItem.quantity}</p>

                    <p style={{overflow: 'auto'}} >I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div class="card-action">
                    <button className={"waves-effect waves-light black text-white btn"} onClick={this.deleteFromCart}>-</button><button className={"waves-effect waves-light black text-white btn"} onClick={this.addDuplicate}>+</button>
                    </div>
                </div>
                </div>
            )
            
        }

    }
}

    const mapStateToProps = state => {
        return state
    }

export default connect(mapStateToProps, { deleteFromCart , addItemToCart})(CartItemCard)

