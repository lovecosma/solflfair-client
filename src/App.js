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
import 'materialize-css/dist/css/materialize.min.css';
import EditItemForm from './containers/EditItemForm';



//TODO: All items upon load

 
class App extends Component {


  componentDidMount = () => { 
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if(loggedInUser){
    this.props.continueSession(loggedInUser)
    } else {
      // routerProps.history.push('/login')
    }
  }
 
  render() {
    const logged_in = this.props.usersReducer.isLoggedIn
    if (this.props.usersReducer.requesting) {
      return <div><h1>Loading</h1></div>
    } else {
      if(logged_in){
          if (this.props.usersReducer.user.admin) {
              return (
                  <Router>
                    <Switch>
                    <div className={"box"}>
                      <Nav/>
                      <Route exact path='/' component={ Home }/>
                      <Route exact path="/items" render={routerProps => <Items {...routerProps} cart={[]}/> } />
                      <Route exact path="/items/new" component={ ItemForm } />
                      <Route exact path='/items/edit' render={routerProps => <EditItemForm {...routerProps}/>}/>
                      <Route exact path='/logout' component={ Home }/>
                    </div>
                  </Switch>
                </Router>
              ) 
          } else {
            return (
              <Router>
                <Switch>
                  <div>
                    <Nav/>
                    <Route exact path='/' component={ Home }/>
                    <Route exact path='/cart' component={ Cart }/>
                    <Route exact path="/items" render={routerProps => <Items {...routerProps} cart={this.props.cartItemsReducer.cartItems}/> } />
                    <Route exact path='/logout' component={ Home }/>
                  </div>
                </Switch>
              </Router>
            )
          }
      } else {
        return (
                <Router>
                  <Switch>
                    <div>
                      <Nav/>
                      <Route exact path="/items" render={routerProps => <Items {...routerProps} />}/>
                      <Route exact path='/login' component={ Login }/>
                      <Route exact path='/signup' component={ Signup }/>
                    </div>
                  </Switch>
                </Router>
                )  
      }
      
    }
  }
}

const mapStateToProps = state => {
  return state
}


export default connect(mapStateToProps, { continueSession, fetchCartItems })(App)