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
            if (this.props.session.usersReducer.user.admin) {
                return (
                    <nav>
                        <div className={"nav-wrapper black"}>
                        <a href="#" class="brand-logo center">Solflair Jewelry</a>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/items">List Products</NavLink></li>
                            <li><NavLink to="/items/new">Create Product</NavLink></li>
                            {/* <li><NavLink to="/cart">View Cart</NavLink></li> */}
                            <li><NavLink onClick={ this.handleClick }to="/">Logout</NavLink></li>
                        </ul>
                        </div>
                    </nav>
                ) 
            } else {
               return (
                    <nav className={"nav-wrapper black"}>
                     <a href="#" class="brand-logo center">Solflair Jewelry</a>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/items">List Products</NavLink></li>
                            {/* <li><NavLink to="/items/new">Create Product</NavLink></li> */}
                            <li><NavLink to="/cart">View Cart</NavLink></li>
                            <li><NavLink onClick={ this.handleClick }to="/">Logout</NavLink></li>
                        </ul>
                    </nav>
                )  
            }
        } else {
            return (
                <nav className={"nav-wrapper black center-align"}>
                 <a href="#" class="brand-logo center">Solflair Jewelry</a>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/items">List Products</NavLink></li>
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
