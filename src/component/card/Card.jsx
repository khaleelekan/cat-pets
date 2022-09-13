import React from 'react'
import './Card.css'

function Card ({name, email , id}){
    return(
        <div className='card'>
        <img alt='' src={`https://robohash.org/${id}?set=set4`} />
        <h3>{name}</h3>
        <p>{email}</p>
    </div>
    )

}
export default Card;