import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Body from './pages/Body';
import Header from './components/header';
import Footer from './components/footer';
import AnimatedCursor from "react-animated-cursor"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* REACT STRICT MODE A ENVELER QUAND FINI DE DEVELOPPE */}
    <AnimatedCursor
      color='84, 83, 83'
      innerSize={9}
      outerSize={8}
    />
      <Header />
      <Body />
      <Footer />
  </React.StrictMode>
);


reportWebVitals();
