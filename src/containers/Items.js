import React, { Component } from 'react';
import { connect } from 'react-redux'
import fetchItems from '../actions/fetchItems' 
import ItemCard from '../components/ItemCard'
import BasicItemCard from '../components/BasicItemCard'
import AdminItemCard from '../components/AdminItemCard'
import { v4 as uuidv4 } from 'uuid';

 class Items extends Component {

    componentDidMount() {
        this.props.fetchItems()
      }
    
    render() {
      
      if (this.props.session.usersReducer.isLoggedIn && !this.props.session.usersReducer.user.admin) {
        
        const items = this.props.session.itemsReducer.items.map(item =>
        <div className="item-card hoverable">
        <ItemCard key={uuidv4()} item={item} history={this.props.history} cart={this.props.cart}/>
        </div>

        )

        return <div className="container">{items}</div>

      } else if(this.props.session.usersReducer.isLoggedIn && this.props.session.usersReducer.user.admin) {

        const items = this.props.session.itemsReducer.items.map(item =>
          <div className="item-card hoverable">
          <AdminItemCard key={uuidv4()} item={item} history={this.props.history} />
          </div>
  
          )
  
        return <div className="container">{items}</div>


      } else {
        
        const items = this.props.session.itemsReducer.items.map(item =>
        <div className="item-card hoverable">
        <BasicItemCard key={uuidv4()} item={item}/>
        </div>
        )
    return <div className="container">{items}</div>         
    }
        
  }
}


const mapStateToProps = state => {
    return {
      session: state
    }
  }

  export default connect(mapStateToProps, { fetchItems })(Items)