import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Packages from './pages/Packages';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app">
      {/* Display the header */}
      <div>
        <Header />
      </div>
      {/* Link the different URL extensions to their corresponding pages */}
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/packages" element={<Packages />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
      {/* Display the footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
