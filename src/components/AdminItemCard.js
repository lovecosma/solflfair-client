import React, { Component } from 'react'
import uploadPhoto from '../actions/uploadPhoto'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import deleteItem from '../actions/deleteItem'



class AdminItemCard extends Component{
    state = {}

    handleImageChange = e => {
        if (e.target.files[0]) this.setState({ newPhoto: e.target.files[0], item_id: this.props.item.id });
    };

    uploadPhoto = () => {
        const formData = new FormData();
        formData.append("file", this.state.newPhoto);
        formData.append("item_id", this.state.item_id)
        this.props.uploadPhoto(formData)
      };

      delete_Item = () => {
          this.props.deleteItem(this.props.item)
      }

      render(){
        const item = this.props.item
        if (item.photo) {
            return (
                     <div >
                     <div className="col s12 m6 l4">
                     <div className="card hoverable" style={{width: '375px'},{overflow: "auto"}}>
                     <div className="card-image">
                      <img src={item.photo} alt="" width="325" height="400"></img><br></br>
                    </div>
                    <div style={{padding: "1em"}}>
                       <span><h5>{ item.name }</h5></span>
                    </div>
                     <div className="card-content" style={{overflow: 'scroll'}}>
                      <p> $ { item.price } </p>
                       {/* <p >
                            { item.description }
                       </p> */}
                     </div>
                     <div class="card-action">
                                <NavLink to={{
                                pathname:"/items/edit",
                                state: {...item}  
                                }}><span><button className={"waves-effect waves-light black text-white btn"} >Edit</button></span>
                                </NavLink>
                            <button onClick={this.delete_Item} className={"waves-effect waves-light black text-white btn"} >Delete</button>
                            </div>
                   </div>
                 </div>
               </div>
            )   
        } else {
            return (
                    <div class="col s12 m6 l3">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title"><h2 className={"flow-text"} >{ item.name }</h2></span>
                            <p> $ { item.price } </p>
                            </div>
                            <div class="card-action">
                        </div>
                    </div>
                    </div>
            )            
        }
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { uploadPhoto, deleteItem })(AdminItemCard)