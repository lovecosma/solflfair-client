import React, { Component } from 'react';
import { connect } from 'react-redux'
import Items from './containers/Items'
import ItemForm from './containers/ItemForm'
import Nav from './components/Nav'
import Home from './containers/Home'
import Signup from './containers/SignupForm'
import Login from './containers/LoginForm'
import continueSession from './actions/continueSession'
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import Cart from './containers/Cart'
import fetchCartItems from './actions/fetchCartItems'


//TODO: All items upon load

 
class App extends Component {


  componentDidMount = () => { 
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if(loggedInUser){
      this.props.continueSession(loggedInUser)
      this.props.fetchCartItems(loggedInUser)
    } else {
      // routerProps.history.push('/login')
    }
  }
 
  render() {
    if (this.props.cartItemsReducer.requesting) {
      return (
          <div>
            <h2>
              Loading...
            </h2>
          </div>
        ) 
    } else {
    return (
      <Router>
        <Switch>
          <div>
            <Nav/>
            <Route exact path="/" component={ Home } />
            <Route exact path="/items" render={routerProps => <Items {...routerProps} cart={this.props.cartItemsReducer.cartItems}/> } />
            <Route exact path="/items/new" component={ ItemForm }/>
            <Route exact path='/login' component={ Login }/>
            <Route exact path='/logout' compnent={ Home }/>
            <Route exact path='/signup' component={ Signup }/>
            <Route exact path='/cart' component={ Cart }/>
          </div>
      </Switch>
    </Router>
      );
    }
  }
};

const mapStateToProps = state => {
  return state
}


export default connect(mapStateToProps, { continueSession, fetchCartItems })(App)