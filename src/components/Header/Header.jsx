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
    const lngs = [
      { code: "en", native: EN},
      { code: "pl", native: PL },
    ];
    const handleNav = () => setNav(!nav);
    const { i18n } = useTranslation();
    const changeLanguage = (code) => {
      i18n.changeLanguage(code);
    }

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
            <li> 
            
         {lngs.map((lng, i) => {
           const { code, native } = lng;
           return <button onClick={() => changeLanguage(code)}> <img src={native} alt="" /></button>;
         })}
              {/* <button onClick={props.en}><img src={EN} alt="en"/></button>
              <ul className="dropdown">
                 <li><button onClick={props.pl}><img src={PL} alt="pl"/></button></li>
              </ul> */}
            </li>
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