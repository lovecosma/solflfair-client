import React from 'react'

const BasicItemCard = (props) => {
    const item = props.item
    // if (item.photo) {
    //     return (
    //         <div>
    //             <h2>{ item.name }</h2>
    //             <p> { item.price } </p>
    //             <img src={item.photo} alt="" width="250" height="250"></img>
    //         </div>
    //     )   
    // } else {
    //     return (
    //         <div>
    //             <h2>{ item.name }</h2>
    //             <p> { item.price } </p>
    //         </div>
    //     )            
    // }
    // render(){
    //     const item = this.props.item
        if (item.photo) {
            return (
                // <div>
                //     <h2>{ item.name }</h2>
                //     <p> { item.price } </p>
                //     <img src={item.photo} alt="" width="250" height="250"></img><br></br>
                //     <button onClick={this.addItem}>Add to Cart</button>
                // </div>
                <div>
                    <div className="col s2 m3 l4">
                    <div className="card">
                    <div className="card-image">
                     <img src={item.photo} alt="" width="250" height="400"></img><br></br>
                </div>
                      <span className="card-title"><h5 className={"flow-text"}>{ item.name }</h5></span>
                    <div className="card-content">
                     <p> $ { item.price } </p>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
\                    </div>
                  </div>
                </div>
              </div>
            )   
        } else {
            return (
                // <div>
                //     <h2>{ item.name }</h2>
                //     <p> { item.price } </p>
                //     <button onClick={this.addItem}>Add to Cart</button>
                // </div>
                    <div class="col s4 m6 l3">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title"><h2 className={"flow-text"} >{ item.name }</h2></span>
                            <p> $ { item.price } </p>
                            <p>I am a very simple card. I am good at containing small bits of information.
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
