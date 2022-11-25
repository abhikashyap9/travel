import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TopDestination from './components/TopDestination';
import TopHotels from './components/TopHotels';
import Footer from './components/Footer';


function App() {
  
  return (
    <div className="App">
     <ResponsiveAppBar/>
     <HeroSection/>
     <TopDestination/>
     <TopHotels/>
     <Footer/>
    </div>
  );
}

export default App;
