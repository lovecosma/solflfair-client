import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import userLogout from '../actions/userLogout'


export class Nav extends Component {

    handleClick = event => {
        this.props.userLogout()
    }

    render() {
        const logged_in = this.props.session.usersReducer.isLoggedIn
        if(logged_in){
            return (
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/items">List Products</NavLink></li>
                        <li><NavLink to="/items/new">Create Product</NavLink></li>
                        <li><NavLink to="/cart">View Cart</NavLink></li>
                        <li><NavLink onClick={ this.handleClick }to="/">Logout</NavLink></li>
                        <li>{}</li>
                    </ul>
                </nav>
            )
        } else {
            return (
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/items">List Products</NavLink></li>
                        <li><NavLink to="/items/new">Create Product</NavLink></li>
                        <li><NavLink to="/login">Log in</NavLink></li>
                        <li><NavLink to="/signup">Sign Up</NavLink></li>
                    </ul>
                </nav>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
      session: state
    }
  }

export default connect(mapStateToProps, { userLogout })(Nav)
