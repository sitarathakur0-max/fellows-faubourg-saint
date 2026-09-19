import React, { useState, useEffect } from 'react';
import { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { RESTAURANT } from './data/restaurantData';
import { Calendar, Utensils, MapPin } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  // Sync with window.location.hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'menu', 'about', 'reviews', 'contact'].includes(hash)) {
        setActiveTab(hash as PageTab);
      }
    };

    // Initial check
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: PageTab) => {
    setActiveTab(tab);
    window.location.hash = tab === 'home' ? '' : `#${tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenReservation = () => {
    setIsReservationModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1E1B18]">
      {/* Skip to Main Content Accessibility Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#C85A32] text-white rounded-md font-semibold text-xs shadow-lg"
      >
        Skip to main content
      </a>

      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenReservation={handleOpenReservation}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onSelectTab={handleSelectTab}
            onOpenReservation={handleOpenReservation}
          />
        )}
        {activeTab === 'menu' && (
          <MenuPage
            onSelectTab={handleSelectTab}
            onOpenReservation={handleOpenReservation}
          />
        )}
        {activeTab === 'about' && (
          <AboutPage
            onSelectTab={handleSelectTab}
            onOpenReservation={handleOpenReservation}
          />
        )}
        {activeTab === 'reviews' && (
          <ReviewsPage
            onSelectTab={handleSelectTab}
            onOpenReservation={handleOpenReservation}
          />
        )}
        {activeTab === 'contact' && (
          <ContactPage
            onSelectTab={handleSelectTab}
            onOpenReservation={handleOpenReservation}
          />
        )}
      </main>

      {/* Mobile Floating Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#1F1B16]/95 backdrop-blur-md border-t border-[#383129] px-4 py-3 flex items-center justify-between gap-3 text-white">
        <div className="flex flex-col">
          <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Open · Closes 11 PM
          </span>
          <span className="text-[10px] text-[#A8A096]">Paris 10e · €10–30</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            id="mobile-sticky-menu-btn"
            onClick={() => handleSelectTab('menu')}
            className="px-3 py-2 text-xs font-semibold text-[#D6CEBF] border border-[#4F463B] rounded-md"
          >
            <Utensils className="w-3.5 h-3.5 inline mr-1" />
            Menu
          </button>
          <button
            id="mobile-sticky-book-btn"
            onClick={handleOpenReservation}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#C85A32] hover:bg-[#B34D27] rounded-md shadow-xs flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book Table
          </button>
        </div>
      </div>

      {/* Site Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenReservation={handleOpenReservation}
      />

      {/* SevenRooms Reservation Helper & Modal */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </div>
  );
}
