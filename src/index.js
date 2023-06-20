import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/loader/Loader';
import {HelmetProvider} from "react-helmet-async";


const root = ReactDOM.createRoot(document.getElementById('root'));
const helmetContext = {};
root.render(
  <React.StrictMode>
    
    <HelmetProvider context={helmetContext}>
    <BrowserRouter>
    <Suspense fallback={<Loader/>}>
           <App />
      </Suspense>
    </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);


