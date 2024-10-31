import React from 'react';
import Header from './components/Header';
import DesignSection from './components/DesignSection';
import CompareSection from './components/CompareSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <DesignSection />
      <CompareSection />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;