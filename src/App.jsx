import './App.scss';
import './style/pageStyle.scss';
import React, {useState} from 'react';
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
  const { t } = useTranslation();
  return (
    <>

    <Header
      about={t("about")}
      offert={t("offert")}
      contact={t("contact")}/>
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
