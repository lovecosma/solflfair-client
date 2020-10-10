import React, { Component } from 'react';
import { connect } from 'react-redux'
import Items from './containers/Items'
import ItemForm from './containers/ItemForm'
import Nav from './components/Nav'
import Home from './containers/Home'
import Signup from './containers/SignupForm'
import Login from './containers/LoginForm'
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';


//TODO: All items upon load

 
class App extends Component {
  handleClick = event => {
    debugger
  }
 
  render() {
    return(
    <Router>
      <Switch>
        <div>
          <Nav/>
          <Route exact path="/" component={ Home } />
          <Route exact path="/items" component={ Items } />
          <Route exact path="/items/new" component={ ItemForm } />
          <Route exact path='/login' component={ Login }/>
          <Route exact path='/logout' render={ () => this.handleClick }/>
          <Route exact path='/signup' component={ Signup }/>
        </div>
    </Switch>
  </Router>
    );
  }
};


export default connect()(App)