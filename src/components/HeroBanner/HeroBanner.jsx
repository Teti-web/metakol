import React from 'react'
import {Link} from 'react-router-dom'
import './heroBanner.scss'

const HeroBanner = (props) => {
  return (
    <section className='heroBanner'>

        <div className='heroBanner-imageContainer'>
            <img src={props.image} alt='Metakol'/>
        </div>
        
        <div className='heroBanner-btnContainer'>
            <Link to={props.link} className="btn btnHero">{props.title}</Link>
        </div>
    </section>
  )
}

export default HeroBanner