import React from 'react';
import Header from '../components/Navbar'; 
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;