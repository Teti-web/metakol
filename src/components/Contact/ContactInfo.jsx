import React from 'react'
import './contactinfo.scss'

const ContactInfo = (props) => {
  return (
    <div className='container'>
        <div className='info'>
            <h2>{props.contact}</h2>
                <p>{props.contactText}</p>

                <a href="mailto:metakol@gmail.com">metakol@gmail.com</a>
                <a href="tel:+48 000 000 000">+48 000 000 000</a>

                <address>
                ul. Kukiełki,7 <br/> <br/>
                02-207, Warszawa
                </address>
            </div>
    </div>
  )
}

export default ContactInfo