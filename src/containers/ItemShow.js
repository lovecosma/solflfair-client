import React, { Component } from 'react'
import { connect } from 'react-redux'




 class ItemShow extends Component {
    render() {
        return (
                <div >
                    <div className="container center">
                        <div>
                            <div className="card-title black white-text">
                            <h2>{ this.props.location.state.name }</h2>
                                
                            </div>
                            <img src={this.props.location.state.photo} alt="" width="650" height="700"></img
                            ><br></br>
                        </div>
                        <div className="card-panel  black white-text" >
                            {/* <p>Price: {(this.props.item.quantity * this.props.item.price).toFixed(2)}</p>
                            <p>Qty: {this.props.item.quantity}</p> */}
                            {/* <p style={{overflow: 'auto'}} >I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p> */}
                            <p style={{overflow: 'auto'}} >This is a piece of <em>beautiful </em>jewelry that I would <strong>love </strong>to share with you.</p>
                        </div>
                        <div className="card-action">
                            {/* <button className={"waves-effect waves-light black text-white btn"} onClick={this.deleteFromCart}>-</button><button onClick={this.addDuplicate} className={"waves-effect waves-light black text-white btn"}>+</button> */}
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            )
        }
}

export default connect()(ItemShow)
