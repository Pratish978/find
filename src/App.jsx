import React from 'react';
import './style.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import LostSection from './Components/Lostsection';
import FoundSection from './Components/FoundSection';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <LostSection/>
      <FoundSection/>
      <Footer/>
    </div>
  );
}

export default App;
