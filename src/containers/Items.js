import React, { Component } from 'react';
import { connect } from 'react-redux'
import fetchItems from '../actions/fetchItems' 
import ItemCard from '../components/ItemCard'

 class Items extends Component {


    componentDidMount() {
        this.props.fetchItems()
      }
    
    render() {
        const items = this.props.session.itemsReducer.items.map(item => <ItemCard key={item.id} item={item}/>);
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