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
        if (item.photo) {
            return ( 
                <div>
                    <div className="col s12 m7 l3">
                    <div className="card" style={{width: '300px'}}>
                    <div className="card-image">
                     <img src={item.photo} alt="" width="250" height="400"></img><br></br>
                </div>
                      <span className="card-title"><h5>{ item.name }</h5></span>
                    <div className="card-content">
                     <p> $ { item.price } </p>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                    <button className={"waves-effect waves-light black text-white btn"} onClick={this.addItem}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            )   
        } else {
            return (
                    <div class="col s12 m6 l3">
                    <div class="card blue-grey darken-1" style={{width: '300px'}}>
                        <div class="card-content white-text">
                        <span class="card-title"><h2>{ item.name }</h2></span>
                        <p> $ { item.price } </p>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                        <button className={"waves-effect waves-light black text-white btn"} onClick={this.addItem}>Add to Cart</button>
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


export default connect(mapStateToProps, { addItemToCart })(ItemCard)
