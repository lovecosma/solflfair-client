import React, { Component } from 'react'
import uploadPhoto from '../actions/uploadPhoto'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import deleteItem from '../actions/deleteItem'



class AdminItemCard extends Component{
    state = {}

    // addItem = () => {
    //     const user = JSON.parse(localStorage.getItem("user"))
    //     this.props.addItemToCart(user, this.props.item, this.props.cart)
    //     this.props.history.push('/cart')
    // }
    handleImageChange = e => {
        if (e.target.files[0]) this.setState({ newPhoto: e.target.files[0], item_id: this.props.item.id });
    };

    uploadPhoto = () => {
        const formData = new FormData();
        formData.append("file", this.state.newPhoto);
        formData.append("item_id", this.state.item_id)
        this.props.uploadPhoto(formData)
      };

      delete_Item = () => {
          this.props.deleteItem(this.props.item)
          this.props.history.push("/")
      }

      render(){
        const item = this.props.item
        if (item.photo) {
            return (
                // <div>
                //     <h2>{ item.name }</h2>
                //     <p> { item.price } </p>
                //     <img src={item.photo} alt="" width="250" height="250"></img><br></br>
                //     <button onClick={this.addItem}>Add to Cart</button>
                // </div>
            //     <div>
            //         <div className="col s m7 l3">
            //         <div className="card" style={{width: '300px'}}>
            //         <div className="card-image">
            //          <img src={item.photo} alt="" width="250" height="250"></img><br></br>
            //     </div>
            //           <span className="card-title"><h5>{ item.name }</h5></span>
            //         <div className="card-content">
            //          <p> $ { item.price } </p>
            //           <p>I am a very simple card. I am good at containing small bits of information.
            //           I am convenient because I require little markup to use effectively.</p>
            //         </div>
            //         <div className="card-action">
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            <div class="col s4 m6 l4">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title"><h2 className={"flow-text"} >{ item.name }</h2></span>
                            <div className="card-image">
                            <img src={item.photo} alt="" width="250" height="400"></img><br></br>
                        </div>
                            <p> $ { item.price } </p>
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div class="card-action">
                                <NavLink to={{
                                pathname:"/items/edit",
                                state: {...item}  
                                }}><span><button className={"waves-effect waves-light black text-white btn"} >Edit</button></span>
                                </NavLink>
                            <button onClick={this.delete_Item} className={"waves-effect waves-light black text-white btn"} >Delete</button>
                            </div>
                    </div>
                    </div>
            )   
        } else {
            return (
                // <div>
                //     <h2>{ item.name }</h2>
                //     <p> { item.price } </p>
                //     <button onClick={this.addItem}>Add to Cart</button>
                // </div>
                    <div class="col s4 m6 l4">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title"><h2 className={"flow-text"} >{ item.name }</h2></span>
                            <p> $ { item.price } </p>
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div class="card-action">
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

export default connect(mapStateToProps, { uploadPhoto, deleteItem })(AdminItemCard)