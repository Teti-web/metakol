import React, {  useState } from "react";
import './Header.scss'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './../../assets/logo.png'
import { NavLink} from 'react-router-dom'
import EN from '../../assets/en.svg'
import PL from '../../assets/pl.svg'
import { useTranslation } from "react-i18next";




const Header = (props) => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    const { t, i18n } = useTranslation();
  return (
    <header className='header'>
      <div className='container header-container'>

        <div className='logo'>
            <NavLink to="/">
                <img src={Logo} alt="Metakol" />
            </NavLink>
        </div>
        
        <nav className='navbar'>
         <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
            <li><NavLink onClick={handleNav} to="/about">{props.about}</NavLink></li>
            <li><NavLink onClick={handleNav} to="/offert">{props.offert}</NavLink></li>
            <li><NavLink onClick={handleNav} to="/contact">{props.contact}</NavLink></li> 
            <li> <button onClick={props.changeLanguageEN}><img src={EN} alt="en"/></button></li>
            <li><button onClick={props.changeLanguagePL}><img src={PL} alt="pl"/></button></li>
        </ul>

        <div className="hamburger" onClick={handleNav}>
             {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
         </div>
        </nav>
         </div>
    </header>
  )
}

export default Header