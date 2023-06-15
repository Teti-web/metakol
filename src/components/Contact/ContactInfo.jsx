import React from 'react'
import './contactinfo.scss'

const ContactInfo = (props) => {
  return (
    <div className='container'>
        <div className='info'>
            <h2>{props.contact}</h2>
                <p>{props.contactText}</p>

                <a href="mailto:m.sharma@metakol.pl">m.sharma@metakol.pl</a>
                <a href="tel:+48 790 255 932">+48 790 255 932</a>
                <a href="tel:+48 537 928 828">+48 537 928 828</a>
                <a href="tel:+48 739 079 989">+48 739 079 989</a>
                <address>
                ul. Kukiełki 7 <br/> <br/>
                02-207, Warszawa
                </address>
            </div>
    </div>
  )
}

export default ContactInfo