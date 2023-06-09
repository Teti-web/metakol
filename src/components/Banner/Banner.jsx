import React from 'react'
import './banner.scss'

const Banner = (props) => {
  return (
    <div className='banner'>
        <div className='banner-container'>
          <div className='banner-background'>
            <picture>
               <source media="(max-width: 600px)" srcSet={props.imgmob} />
              <img src={props.img} alt={props.alt} />
            </picture>
          </div>
            <div className='banner-item'>
                <h1 className='title'>{props.title}</h1>
            </div>
        </div>
    </div>
  )
}

export default Banner
