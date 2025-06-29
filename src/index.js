import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import AnimatedCursor from "react-animated-cursor";
import SimpleHeader from './components/simpleHeader';

import Body from './pages/Body'; // ta page d'accueil
import Cgv from './pages/Cgv/conditionGeneral.jsx'; // page CGV
import Privacy from './pages/Privacy/privacyTerm.jsx'; // page confidentialité

reportWebVitals();

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;

  const isSimple = path === "/cgv" || path === "/privacy";

  return (
    <>
      <AnimatedCursor color='84, 83, 83' innerSize={9} outerSize={8} />

      {isSimple ? <SimpleHeader /> : <Header />}

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/cgv" element={<Cgv />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Layout />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
