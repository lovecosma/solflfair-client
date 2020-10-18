import React, { Component } from 'react'
import  userLogin from '../actions/userLogin'
import { connect } from 'react-redux'

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
            <div className={'center container'}>
                <br></br>
                <br></br>
                <br></br>
                <h2>Login</h2>
               <form onSubmit={this.handleSubmit}>
                   <div className={'input-field'}>
                    {/* <label for="email">Email:</label> */}
                    <input onChange={this.handleChange} type="text" name="email" placeholder="Email" style={{display: "block"},{width: "750px"}}></input><br></br><br></br>
                   </div>
                   <div>
                    {/* <label for="password">Password:</label> */}
                    <input onChange={this.handleChange} type="password" name="password" placeholder={'Password'} style={{display: "block"},{width: "750px"}}></input><br></br><br></br>
                   </div>
                    <button className={"waves-effect waves-light black text-white btn"}type='submit' name='submit' id='submit'>Login</button>
                 </form> 
            </div>
        )
    }
}



export default connect(null, { userLogin })(LoginForm)

