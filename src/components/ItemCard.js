import React from 'react'

function ItemCard({ item }) {
    return (
        <div>
            <h2>{ item.name }</h2>
            <p> { item.price } </p>
        </div>
    )
}


export default ItemCard
