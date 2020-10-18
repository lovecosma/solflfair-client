import React, { Component } from 'react'
import createPhoto from '../actions/createPhoto'
import { connect } from 'react-redux'


 class CreatePhoto extends Component {
    state = {
        title: "",
        url: "",
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
            title: "",
            url: "",
        })
        this.props.createPhoto(this.state)
        // this.props.history.push('/items')
    }
    render() {
        if(this.props.photosReducer.requesting){
        return (
            <div className="container">
              <form onSubmit={this.handleSubmit} action="">
                <input onChange={this.handleChange}type="text" name="title" id=""></input> 
                <input onChange={this.handleImageChange} type="file" name="file" id=""></input><br></br>
                <button className={"waves-effect waves-light black text-white btn"} onSubmit={this.handleSubmit} type="submit" name="submit">Upload Photo</button>
            </form> 
            </div>
        )
      } else{
        const photocards = this.props.photosReducer.photos.map(photo => {
            return (
            <div>
                <h4>{ photo.title }</h4>
                <p>{ photo.url }</p>
                <img src={ photo.url } alt=""></img>
            </div>
            )
        })
        return (
            <div className="container">
              <form onSubmit={this.handleSubmit} action="">
                <input onChange={this.handleChange}type="text" name="title" id=""></input> 
                <input onChange={this.handleImageChange} type="file" name="file" id=""></input><br></br>
                <button className={"waves-effect waves-light black text-white btn"} onSubmit={this.handleSubmit} type="submit" name="submit">Upload Photo</button>
            </form>
            <div>
                <h3>
                    Photos
                </h3>
                { photocards }
            </div> 
            </div>
        )
      }
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {createPhoto})(CreatePhoto)
