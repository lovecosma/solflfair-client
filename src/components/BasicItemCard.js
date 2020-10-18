import React from 'react'
import { Link } from 'react-router-dom';


const BasicItemCard = (props) => {
    const item = props.item
        if (item.photo) {
            return (
                <div >
                <div className="col s12 m6 l4">
                <div className="card hoverable" style={{width: '375px'},{overflow: "auto"}}>
                <Link to={{
                    pathname:`/item/${item.id}`,
                    state: {...item}  
                    }}><span>
                    <div className="card-image">
                     <img src={item.photo} alt="" width="250" height="400"></img><br></br>
                        </div>
                    </span>
                </Link> 
               <div style={{padding: "1em"}}>
                  <span><h5>{ item.name }</h5></span>
               </div>
                <div className="card-content" style={{overflow: 'scroll'}}>
                 <p> $ { item.price } </p>
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
