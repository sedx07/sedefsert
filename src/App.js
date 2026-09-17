import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/home';
import Experience from './components/pages/experience';
import Education from './components/pages/education';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Education />
      <Footer />
    </>
  );
}

export default App;
