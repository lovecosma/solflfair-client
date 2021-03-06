import React, {Component} from 'react'
import { connect } from 'react-redux'
import {  Link } from 'react-router-dom';
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
            <div className="z-depth-1" style={{padding:"10px"}}>
            <div className="card-wrapper">
                <Link to={{
                            pathname:`/item/${item.id}`,
                            state: {...item}  
                            }}>
                    <img  src={item.photo}></img>
                </Link>
                <div className="card-body">
                    <div className="card-title flow-text" >
                        <h5>{ item.name }</h5>
                    </div><br/><br/>
                    <div className="card-content" >
                    <div className="item-price">
                        <p className="flow-text large-font">$ { item.price } </p>
                    </div>
                    <div className="card-description">
                        { item.description }
                    </div>
                    </div><br/><br/>
                    <div className="center">
                        <div class="card-action">
                        <button  className="flat waves-effect waves-light black text-white btn" style={{margin: "10px"}} onClick={this.addItem} style={{margin: "10px"}}>Add Item</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )   
            return (
                <div >
                <div className="col s12 m6 l4">
                <div className="card hoverable" style={{width: '375px'},{overflow: "auto"}}>
                <Link to={{
                    pathname:`/item/${item.id}`,
                    state: {...item}  
                    }}><span>
                    <div className="card-image">
                     <img src={item.photo} alt="" width="250" height="400"></img><br></br>
                        </div>
                    </span>
                </Link> 
                {/* <div className="card-image">
                 <img src={item.photo} alt="" width="325" height="400"></img><br></br>
               </div> */}
               <div style={{padding: "1em"}}>
                  <span><h5>{ item.name }</h5></span>
               </div>
                <div className="card-content" style={{overflow: 'scroll'}}>
                 <p> $ { item.price } </p>

                </div>
              </div>
            </div>
          </div>
       )   
        } else {
            return (
                <div>
                    Hey
                </div>
                    // <div class="col s12 m6 l3">
                    // <div class="card blue-grey darken-1" style={{width: '300px'}}>
                    //     <div class="card-content white-text">
                    //     <span class="card-title"><h2>{ item.name }</h2></span>
                    //     <p> $ { item.price } </p>
                    //     </div>
                    //     <div class="card-action">
                    //     <button className={"waves-effect waves-light black text-white btn"} onClick={this.addItem}>Add to Cart</button>
                    //     </div>
                    // </div>
                    // </div>
            )            
        }
    }
}

const mapStateToProps = state => {
    return state
}


export default connect(mapStateToProps, { addItemToCart })(ItemCard)
