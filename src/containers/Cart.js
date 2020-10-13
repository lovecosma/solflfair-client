// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import fetchCart from '../actions/fetchCart'
// import CartItemCard from '../components/CartItemCard'
import { v4 as uuidv4 } from 'uuid';

//  export class Cart extends Component {
    //     state = {
        //         cartItems: []
        //     }
        //     componentDidMount = () => {
            //         const user = this.props.usersReducer.user 
            //         this.props.fetchCart(user)
            //         this.props.fetchCartItems(user)
            //     }
            
            //      render() {
                //          debugger         
                //          return (
                    //              <div>
                    //                 {/* {cartItemCards}  */}
                    //              </div>
                    //          )
                    //      }
                    //  }
                    
                    //  const mapStateToProps = state => {
                        //      return state
                        //  }
                        
                        //  export default connect(mapStateToProps, { fetchCart, fetchCartItems })(Cart)
import fetchCartItems from '../actions/fetchCartItems'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchCart from '../actions/fetchCart'
import CartItemCard from '../components/CartItemCard'

export class Cart extends Component {
                            
    componentDidMount = () => {
        const user = this.props.usersReducer.user
        this.props.fetchCart(user)
        this.props.fetchCartItems(user)
    }

     render() {
         const items = this.props.cartItemsReducer.cartItems
         if(items.length > 0){
             const itemCards = items.map(item => <CartItemCard key={uuidv4()} item={item} /> )
        
            return (
                <div>
                    { itemCards }
                </div>
            )
        }else{
            return (
                <div>
                    <h2>Nothing to show</h2>
                </div>
            )
        }
     }
 }

 const mapStateToProps = state => {
     return state
 }
 
 export default connect(mapStateToProps, { fetchCart, fetchCartItems })(Cart)
 