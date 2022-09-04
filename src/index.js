import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Body/>
    <Footer/>
  </React.StrictMode>
);
