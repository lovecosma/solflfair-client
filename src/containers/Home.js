import React, {Component} from 'react'
import { connect } from 'react-redux'

class Home extends Component {  
  render(){
  // if(!this.props.photosReducer.requesting){
  // console.log(this.prop.photosReducer.photos) 
  // } else {
  //   console.log("loading");
  // }
    return (
        <div className="back">
        </div>
    )
  }
}

const mapStateToProps = state => {
    return state
  }
   

export default connect(mapStateToProps)(Home)
