import './App.scss';
import './style/pageStyle.scss';
import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomePage from './page/homePage/HomePage';
import AboutPage from './page/aboutPage/AboutPage';
import OffersPage from './page/offersPage/OffersPage';
import ContactPage from './page/contactPage/ContactPage';
import NotFound from './page/NotFound/NotFound';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

function App() {
  const { t, i18n } = useTranslation();
 
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    console.log('Click change language', lng);
  };
  return (
    
    <>
     <Header
      about={t("about")}
      offert={t("offert")}
      contact={t("contact")}
      changeLanguageEN={() => handleLanguageChange('en')}
      changeLanguagePL={() => handleLanguageChange('pl')}/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/offert' element={<OffersPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer
    homepage={t("homepage")}
    about={t("about")}
    offert={t("offert")}
    contact={t("contact")}
    footcontact={t("footcontact")}
    adrsfirm={t("adrsfirm")}/>
    </>
  );
}

export default App;
