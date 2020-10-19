import React, { Component } from 'react'
import  addItem from '../actions/addItem'
import { connect } from 'react-redux'


export class ItemForm extends Component {
    state ={
        name: "",
        price: "",
        photo: "",
        description: ""
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
            name: "",
            price: "",
            description: "",
        })
        this.props.addItem(this.state)
        this.props.history.push('/items')
    }

    uploadPhoto = () => {

      };

    render() {
        return (
            <div className={'container'} id="card">
                <br></br>
                <br></br>
                <br></br>
                <div className={'center card black white-text'}>
                <h5 className={"center"}>Create New Item</h5>
                <form onSubmit={this.handleSubmit} >
                    <div className={"input-field"}>
                    <input onChange={this.handleChange} type="text" name="name" id="name" placeholder="Item Name"></input><br></br><br></br>
                    </div>
                    <div className={"input-field"}>
                    <input onChange={this.handleChange} type="text" name="price" id="price" placeholder="Item Price"></input><br></br><br></br>
                    </div>
                    <div className={"input-field"}>
                    <input type="file" name="newPhoto"accept="image/png, image/jpeg" onChange={this.handleImageChange} />
                    </div>
                    <div className={"input-field"}>
                       <input onChange={this.handleChange} type="text" name="description" id="description" placeholder="Item Description" ></input>
                    </div>
                    <br></br>
                    <br></br>                 
                    <button className={"waves-effect waves-light black text-white btn"}>Create Item</button>
                </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { addItem })(ItemForm)
