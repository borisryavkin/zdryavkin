import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Benefits from './components/Benefits.tsx';
import About from './components/About.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App; 