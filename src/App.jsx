import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import InviteSection from './components/InviteSection';
import Footer from './components/Footer';

import Background from './components/Background';


function App() {
  const scrollToSchedule = () => {
    const element = document.getElementById('schedule');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <Background />
      <Header onScheduleClick={scrollToSchedule} />
      <Hero onScheduleClick={scrollToSchedule} />
      <ContentSection />
      <InviteSection />
      <Footer />
    </div>
  );
}

export default App;
