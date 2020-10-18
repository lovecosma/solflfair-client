import React, { Component } from 'react'
import  updateItem from '../actions/updateItem'
import { connect } from 'react-redux'


export class EditItemForm extends Component {
    state ={
        id: this.props.location.state.id,
        name: this.props.location.state.name,
        price: this.props.location.state.price,
        photo: null
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
            price: ""
        })
        this.props.updateItem(this.state)
        this.props.history.push('/items')
    }

    render() {
        return (
            <div className={'container'}>
                <br></br>
                <br></br>
                <br></br>
                <h5 className={"center"}>Update Item</h5>
                <form onSubmit={this.handleSubmit} >
                    <div className={"input-field"}>
                    <input onChange={this.handleChange} type="text" name="name" id="name" value={this.state.name}></input><br></br><br></br>
                    </div>
                    <div className={"input-field"}>
                    <input onChange={this.handleChange} type="text" name="price" id="price" value={this.state.price}></input><br></br><br></br>
                    </div>
                    <div className={"input-field"}>
                    <input type="file" name="newPhoto"accept="image/png, image/jpeg" placeholder={this.state.photo} onChange={this.handleImageChange} />
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
