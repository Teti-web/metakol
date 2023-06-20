import React from 'react'
import './heroSection.scss'

const HeroSection = (props) => {
  return (
      <section className='heroSection m-bottom'>
        <div className='container heroSection-container'>

          
            <div className='heroSection-content'>
                <div className='heroSection-other'>
                  <h2>{props.title}</h2>
                  <p>{props.text}</p>
               </div>
           </div>
           
           <div className='heroSection-image'>
              <picture>
              <source media='(max-width: 600px)' srcSet={props.mob} />
              <img src={props.imgName} alt="image" />
              </picture>
           </div>
            
        </div>
      </section>
  )
}

export default HeroSection