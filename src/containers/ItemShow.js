import React, { Component } from 'react'
import { connect } from 'react-redux'




 class ItemShow extends Component {
    state={
        ...this.props.location.state
    }

    render() {
    
        return (
            <div className="container">
                    <div className="item-show-card">
                        <div className="float-container">
                            <div className="item-show-img-div">
                            <img className="item-show-img" src={this.state.photo} alt=""></img>
                            </div>
                            <div className="item-show-info-div">
                                <p className="item-show-brand white-text">Solflair Jewelry</p>
                                <p className="item-show-title white-text">{this.state.name}</p>
                                <p className="white-text">${this.state.price}</p>
                                <p className="white-text" >{this.state.description}</p>
                                <button className="fancy black-text">ADD TO CART</button>
                            </div>
                        </div>
                </div>
            </div>
            )
        }
}

export default connect()(ItemShow)
