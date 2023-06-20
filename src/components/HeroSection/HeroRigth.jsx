import React from 'react'
import './heroSection.scss'

const HeroRigth = (props) => {
  return (
    <section className='heroSection'>
    <div className='container heroSection-container'>
 
       <div className='heroSection-image'>
        <picture>
           <source media='(max-width: 600px)' srcSet={props.mob} />
          <img src={props.imgName} alt="image" />
        </picture>
       </div>
        <div className='heroSection-content '>
            <div className="heroSection-other leftText">
              <h2>{props.title}</h2>
              <p>{props.text}</p>
           </div>
       </div>
    
    </div>
  </section>
  )
}

export default HeroRigth