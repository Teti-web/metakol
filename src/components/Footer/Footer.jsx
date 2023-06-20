import React from 'react'
import './footer.scss'
import {Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <footer className="footer">
        <div className='container'>
            <div className='footer-container'>
             <div className='footer-column'>
                  <Link to='/'>{props.homepage}</Link>
                  <Link to='/about'>{props.about}</Link>
                  <Link to='/offert'>{props.offert}</Link>
                  <Link to='/contact'>{props.contact}</Link>
             </div>

             <div className='footer-column'>
                <p>{props.footcontact}</p>
                <a href="mailto:m.sharma@metakol.pl">m.sharma@metakol.pl</a>
                <a href="tel:+48 790 255 932">+48 790 255 932</a>
                <a href="tel:+48 537 928 828">+48 537 928 828</a>
                <a href="tel:+48 739 079 989">+48 739 079 989</a>
             </div>

             <div className='footer-column'>
                <p>{props.adrsfirm}</p>
                <p>Metakol</p>
                <address>
                ul. Kukiełki 7 <br/> <br/>
                02-207, Warszawa
                </address>
             </div>
        </div>
        <span>© 2023 Metakol</span>
        </div>
    </footer>
  )
}

export default Footer