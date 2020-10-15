import React, { Component } from 'react';
import { connect } from 'react-redux'
import fetchItems from '../actions/fetchItems' 
import ItemCard from '../components/ItemCard'
import { v4 as uuidv4 } from 'uuid';

 class Items extends Component {

    componentDidMount() {
        this.props.fetchItems()
      }
    
    render() {
        const items = this.props.session.itemsReducer.items.map(item =>
        <div>
        <ItemCard key={uuidv4()} item={item} history={this.props.history} cart={this.props.cart}/>
        </div>
        );
        return (
            <div>
               {items} 
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      session: state
    }
  }

  export default connect(mapStateToProps, { fetchItems })(Items)