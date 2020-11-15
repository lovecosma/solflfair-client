import React from 'react'
import { Link } from 'react-router-dom';


const BasicItemCard = (props) => {
    const item = props.item
        if (item.photo) {
            return (
            <div className="z-depth-1" style={{padding:"10px"}}>
            <div className="card-wrapper">
                    <img  src={item.photo}></img>
                <div className="card-body">
                    <div className="card-title flow-text" >
                        <h5>{ item.name }</h5>
                    </div><br/><br/>
                    <div className="card-content" >
                    <div className="item-price">
                        <p className="flow-text large-font">$ { item.price } </p>
                    </div>
                    <div className="card-description">
                        { item.description }
                    </div>
                    </div><br/><br/>
                    <Link to={{
                                pathname:`/item/${item.id}`,
                                state: {...item}  
                                }}>
                        <button className="waves-effect waves-light black text-white btn" style={{margin: "10px"}}>View Item</button>
                    </Link>
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
                            <p style={{overflow: 'auto'}} >I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div class="card-action">
                        </div>
                    </div>
                    </div>
            )            
        }
    // }
}

export default BasicItemCard
