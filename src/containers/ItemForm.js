import React, { Component } from 'react'
import  addItem from '../actions/addItem'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';


export class ItemForm extends Component {
    state ={
        name: "",
        price: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            name: "",
            price: ""
        })
        this.props.addItem(this.state)
        this.props.history.push('/items')
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="name">Item Name:</label>
                    <input onChange={this.handleChange} type="text" name="name" id="name"></input><br></br><br></br>
                    <label htmlFor="price">Price:</label>
                    <input onChange={this.handleChange} type="text" name="price" id="price"></input><br></br><br></br>
                    <button>Create Item</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addItem })(ItemForm)
