import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/loader/Loader';
import {HelmetProvider} from "react-helmet-async";
import { I18nextProvider } from 'react-i18next';
import { CookiesProvider } from 'react-cookie';
import i18n, {useChangeLanguageWithCookie} from './i18n';


const root = ReactDOM.createRoot(document.getElementById('root'));
const helmetContext = {};
root.render(
  <React.StrictMode>
    
    <HelmetProvider context={helmetContext}>
    <BrowserRouter>
    <Suspense fallback={<Loader/>}>
    <I18nextProvider i18n={i18n}>
      <CookiesProvider>
           <App />
      </CookiesProvider>
    </I18nextProvider>
      </Suspense>
    </BrowserRouter>
    </HelmetProvider>
    
  </React.StrictMode>
);


