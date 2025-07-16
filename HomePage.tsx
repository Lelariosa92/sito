import React from 'react';
import NotificationBar from '../components/NotificationBar';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SectorsSection from '../components/SectorsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import ROICalculator from '../components/ROICalculator';
import ComparisonSection from '../components/ComparisonSection';
import EligibilitySection from '../components/EligibilitySection';
import ChatWidget from '../components/ChatWidget';
import StickyCTA from '../components/StickyCTA';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <NotificationBar />
      <Header />
      <HeroSection />
      <SectorsSection />
      <CaseStudiesSection />
      <ROICalculator />
      <ComparisonSection />
      <EligibilitySection />
      <ChatWidget />
      <StickyCTA />
      <Footer />
    </>
  );
};

export default HomePage;