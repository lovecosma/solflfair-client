import React, { Component } from 'react'
import  createUser from '../actions/createUser'
import { connect } from 'react-redux'


export class SignupForm extends Component {

    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: ""
        })
        this.props.createUser(this.state)
        this.props.history.push("/")
    }

    render() {
        return (
            <div className={"container"}>
                  <br></br>
                  <br></br>
                <h2 className={'center'}>Sign Up</h2>
                <br></br>
               <form onSubmit={this.handleSubmit}>
                    <label for="first_name">First Name:</label>
                    <input onChange={this.handleChange} type="text" name="first_name"></input><br></br><br></br>
                    <label for="last_name">Last Name:</label>
                    <input onChange={this.handleChange} type="text" name="last_name"></input><br></br><br></br>
                    <label for="email">Email:</label>
                    <input onChange={this.handleChange} type="text" name="email"></input><br></br><br></br>
                    <label for="password">Password:</label>
                    <input onChange={this.handleChange} type="password" name="password"></input><br></br><br></br>
                    <label for="password_confirmation">Password Confirmation: </label>
                    <input onChange={this.handleChange} type="password" name="password_confirmation"></input><br></br><br></br>
                    <button type='submit' name='submit' id='submit'>Sign Up</button>
                 </form> 
            </div>
        )
    }
}


export default connect(null, { createUser })(SignupForm)
