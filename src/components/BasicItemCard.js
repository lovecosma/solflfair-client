import React from 'react'

const BasicItemCard = (props) => {
    const item = props.item
    if (item.photo) {
        return (
            <div>
                <h2>{ item.name }</h2>
                <p> { item.price } </p>
                <img src={item.photo} alt=""></img>
            </div>
        )   
    } else {
        return (
            <div>
                <h2>{ item.name }</h2>
                <p> { item.price } </p>
            </div>
        )            
    }
}

export default BasicItemCard
