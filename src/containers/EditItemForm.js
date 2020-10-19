import React, { Component, PropTypes } from 'react'
import  updateItem from '../actions/updateItem'
import { connect } from 'react-redux'
import MyStatefulEditor from  '../components/MyStatefulEditor'


export class EditItemForm extends Component {
    state ={
        id: this.props.location.state.id,
        name: this.props.location.state.name,
        price: this.props.location.state.price,
        photo: null,
        description: this.props.location.state.description
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleImageChange = e => {
        if (e.target.files[0]) this.setState({ photo: e.target.files[0]});
    };
    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            id: "",
            name: "",
            price: "",
            description: ""
        })
        debugger
        this.props.updateItem(this.state)
        this.props.history.push('/items')
    }

    render() {
        const div = document.getElementById('div')
        if (div) {
            div.innerHTML = `${this.state.description}`
            
        }
        return (
            <div className={'container white'} id="card">
                <br></br>
                <br></br>
                <br></br>
                <div className="card black"></div>
                <h5 className={"center"}>Update Item</h5>
                <form id="card-2"onSubmit={this.handleSubmit} >
                    <div className={"input-field"}>
                    <input onChange={this.handleChange} type="text" name="name" id="name" value={this.state.name} placeholder={this.state.name}></input><br></br><br></br>
                    </div>
                    <div className={"input-field"}>
                    <input onChange={this.handleChange} type="text" name="price" id="price" value={this.state.price} placeholder={this.state.price}></input><br></br><br></br>
                    </div>
                    <div className={"input-field"}>
                    <input type="file" name="newPhoto"accept="image/png, image/jpeg" placeholder={this.state.photo} onChange={this.handleImageChange} />
                    </div>
                    <div className={"input-field"}>
                       <input onChange={this.handleChange} type="text" name="description" id="description" value={this.state.description} placeholder={this.state.description} ></input>
                    </div>
                    <br></br>
                    <br></br>                 
                    <button onSubmit={this.handleSubmit}className={"waves-effect waves-light black text-white btn"} type="submit" >Update Item</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { updateItem })(EditItemForm)
