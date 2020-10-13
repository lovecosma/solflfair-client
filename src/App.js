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
import fetchCart from './actions/fetchCart'
import Cart from './containers/Cart'


//TODO: All items upon load

 
class App extends Component {


  componentDidMount = () => {
    const loggedInUser = localStorage.getItem("user");
    if(loggedInUser){
      this.props.continueSession(loggedInUser)
      this.props.fetchCart(loggedInUser)
    } else {
      this.props.history.push("/")
    }
  }
 
  render() {
    return(
    <Router>
      <Switch>
        <div>
          <Nav/>
          <Route exact path="/" component={ Home } />
          <Route exact path="/items" render={routerProps => <Items {...routerProps} /> } />
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
};


export default connect(null, { continueSession, fetchCart })(App)