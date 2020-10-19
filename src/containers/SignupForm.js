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
            <div className={"container"} >
                  <br></br>
                  <br></br>
                  <div  className={'center card black white-text'}>

                <h2 className={'center'} >Sign Up</h2>
                <br></br>
               <form onSubmit={this.handleSubmit}>
                    {/* <label for="first_name">First Name:</label> */}
                    <div className={'input-field'}>
                    <input onChange={this.handleChange} type="text" name="first_name" placeholder="First name"></input><br></br><br></br>
                    </div>
                    {/* <label for="last_name">Last Name:</label> */}
                    <div className={'input-field'}>
                    <input onChange={this.handleChange} type="text" name="last_name" placeholder="Last name"></input><br></br><br></br>
                    </div>
                    {/* <label for="email">Email:</label> */}
                    <div className={'input-field'}>
                    <input onChange={this.handleChange} type="text" name="email" placeholder="Email"></input><br></br><br></br>
                    </div>
                    {/* <label for="password">Password:</label> */}
                    <div className={'input-field'}>
                    <input onChange={this.handleChange} type="password" name="password" placeholder="Password"></input><br></br><br></br>
                    </div>
                    {/* <label for="password_confirmation">Password Confirmation: </label> */}
                    <div className={'input-field'}>
                    <input onChange={this.handleChange} type="password" name="password_confirmation" placeholder="Password Confirmation"></input><br></br><br></br>
                    </div>
                    <button className={"waves-effect waves-light black text-white btn"} type='submit' name='submit' id='submit'>Sign Up</button>
                 </form> 
                  </div>
            </div>
        )
    }
}


export default connect(null, { createUser })(SignupForm)
