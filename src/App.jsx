import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Path from './components/Path';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Path />
      <About />
      <Footer />
    </div>
  );
}

export default App;