import React from 'react'
import {Link} from 'react-router-dom'
import './cardStyle.scss';
const Card = (props) => {
  return (
    <div className='card'>
            <figure className='card-thumb'>
                <div className='card-image'>
                  {/* img h=210px */}
               <img src={props.image} alt={props.titleCard}/>
               </div>
               <figcaption className='card-caption'>
                   <h2 className='card-title'>{props.titleCard}</h2>
                   <p className='card-snippet'>{props.textCard}</p>
                   <Link to='/offert' className='btn card-button'>{props.more}</Link>
               </figcaption>
            </figure>
        </div>
  )
}

export default Card
