import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { COMPANY_INFO } from './data/mockData';
import { LiveDispatchBanner } from './components/LiveDispatchBanner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { SeoPanel } from './components/SeoPanel';

// Pages
import { Home } from './pages/Home';
import { ServicesPage } from './pages/Services';
import { IndustriesPage } from './pages/Industries';
import { FleetPage } from './pages/Fleet';
import { RatesPage } from './pages/Rates';
import { AboutUsPage } from './pages/AboutUs';
import { ContactPage } from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isSeoPanelOpen, setIsSeoPanelOpen] = useState(false);
  
  // Accessibility Mode Toggles
  const [accessibilityMode, setAccessibilityMode] = useState({
    highContrast: false,
    largeText: false,
  });

  // Smooth scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const toggleHighContrast = () => {
    setAccessibilityMode((prev) => ({
      ...prev,
      highContrast: !prev.highContrast,
    }));
  };

  const toggleLargeText = () => {
    setAccessibilityMode((prev) => ({
      ...prev,
      largeText: !prev.largeText,
    }));
  };

  const handleCallQuote = () => {
    window.location.href = `tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`;
  };

  const handleCalculatorQuote = (material: string, tons: number) => {
    handleCallQuote();
  };

  return (
    <div
      className={`min-h-screen bg-[#0B132B] font-sans text-white flex flex-col selection:bg-[#10B981] selection:text-black ${
        accessibilityMode.highContrast ? 'contrast-125 saturate-150' : ''
      } ${accessibilityMode.largeText ? 'text-lg' : ''}`}
    >
      {/* Main Sticky Navigation Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        openQuoteModal={handleCallQuote}
        accessibilityMode={accessibilityMode}
        toggleHighContrast={toggleHighContrast}
        toggleLargeText={toggleLargeText}
        openSeoPanel={() => setIsSeoPanelOpen(true)}
      />

      {/* Main Page View Container */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <Home
            setCurrentPage={setCurrentPage}
            openQuoteModal={handleCallQuote}
            onCalculatorQuote={handleCalculatorQuote}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage openQuoteModal={handleCallQuote} />
        )}
        {currentPage === 'industries' && (
          <IndustriesPage openQuoteModal={handleCallQuote} />
        )}
        {currentPage === 'fleet' && (
          <FleetPage openQuoteModal={handleCallQuote} />
        )}
        {currentPage === 'rates' && (
          <RatesPage openQuoteModal={handleCallQuote} />
        )}
        {currentPage === 'about' && (
          <AboutUsPage openQuoteModal={handleCallQuote} />
        )}
        {currentPage === 'contact' && (
          <ContactPage openQuoteModal={handleCallQuote} />
        )}
      </main>

      {/* Comprehensive Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        openQuoteModal={handleCallQuote}
        openSeoPanel={() => setIsSeoPanelOpen(true)}
      />

      {/* Online Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* SEO & Schema Inspector Panel */}
      <SeoPanel
        isOpen={isSeoPanelOpen}
        onClose={() => setIsSeoPanelOpen(false)}
      />
    </div>
  );
}
