import React from 'react'
// import swimmerImage from '../images/Swimmer.png' 
// import weddingImage from '../images/Wedding.png'
// import bikeImage from '../images/Bike.png'
import starImage from '../sourceimages/Star 1.png'


export default function Card(props){
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = 'SOLD OUT'
    } else if (props.item.location === 'Online'){
        badgeText = 'ONLINE'
    }

    return(
        <div className='card'>

            {badgeText &&
            <div className='card--badge'>{badgeText}</div>}

            <img className='card--image'
                src={`../images/${props.item.coverImg}`}
            />

            <div className='card--stats'>
                <img className='card--star'
                src={starImage}/>
                <span>{props.item.stats.rating}</span>
                <span className='gray'>({props.item.stats.reviewCount}) • </span>
                <span className='gray'>{props.item.location}</span>
                <p>{props.item.title}</p>
                <p><span className='bold'>From ${props.item.price}</span> / person</p>
            </div>

        </div>
    )
}