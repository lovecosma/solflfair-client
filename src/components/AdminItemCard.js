import React, { Component } from 'react'
import uploadPhoto from '../actions/uploadPhoto'
import { connect } from 'react-redux'


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


    render(){
        const item = this.props.item
        console.log(item.photo);
        if(item.photo){
            return (
                <div>
                    <h2>{ item.name }</h2>
                    <p> { item.price } </p>
                    <img src={item.photo} alt=""></img>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>{ item.name }</h2>
                    <p> { item.price } </p>
                    {/* <input type="file" name="newPhoto"accept="image/png, image/jpeg" onChange={this.handleImageChange} />                
                    <button onClick={this.uploadPhoto}>Upload Image</button> */}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { uploadPhoto })(AdminItemCard)