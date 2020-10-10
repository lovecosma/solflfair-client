import React, { Component } from 'react'
import  userLogin from '../actions/userLogin'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';

export class LoginForm extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            email: "",
            password: ""
        })
        this.props.userLogin(this.state)
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                    <label for="email">Email:</label>
                    <input onChange={this.handleChange} type="text" name="email"></input><br></br><br></br>
                    <label for="password">Password:</label>
                    <input onChange={this.handleChange} type="password" name="password"></input><br></br><br></br>
                    <button type='submit' name='submit' id='submit'>Login</button>
                 </form> 
            </div>
        )
    }
}



export default connect(null, { userLogin })(LoginForm)
