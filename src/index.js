import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/loader/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Suspense fallback={<Loader/>}>
      <App />
      </Suspense>
    </BrowserRouter>
    
  </React.StrictMode>
);


