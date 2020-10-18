import React from 'react'

const BasicItemCard = (props) => {
    const item = props.item
        if (item.photo) {
            return (
                <div>
                    <div className="col s12 m6 l3">
                    <div className="card">
                    <div className="card-image">
                     <img src={item.photo} alt="" width="250" height="400"></img><br></br>
                </div>
                      <span className="card-title"><h5 className={"flow-text"}>{ item.name }</h5></span>
                    <div className="card-content">
                     <p> $ { item.price } </p>
                      <p style={{overflow: 'auto'}}>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
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
