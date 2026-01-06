import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Benefits from './components/Benefits.tsx';
import About from './components/About.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';
import Survey from './components/Survey.tsx';
import RobokassaButton from './components/RobokassaButton.tsx';

function App() {
  const [showSurvey, setShowSurvey] = useState(false);

  useEffect(() => {
    if (showSurvey) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showSurvey]);

  // Simple routing for demo: show RobokassaButton if path is /sales
  if (window.location.pathname === '/sales') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-3xl md:text-5xl font-light text-brand-green-900 mb-8">Оплата заказа</h1>
        <RobokassaButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero onStartSurvey={() => setShowSurvey(true)} />
        <Benefits />
        <About />
        <Testimonials />
      </main>
      <Footer />
      {showSurvey && <Survey />}
    </div>
  );
}

export default App; 