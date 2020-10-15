import React from 'react'

const BasicItemCard = (props) => {
    const item = props.item
    return (
        <div>
            <h2>{ item.name }</h2>
            <p> { item.price } </p>
        </div>
    )        
}

export default BasicItemCard
