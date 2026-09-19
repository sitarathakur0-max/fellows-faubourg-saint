import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { RESTAURANT } from '../data/restaurantData';
import { Menu, X, Calendar, Utensils, Star, MapPin } from 'lucide-react';

interface NavbarProps {
  activeTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenReservation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { tab: PageTab; label: string }[] = [
    { tab: 'home', label: 'Home' },
    { tab: 'menu', label: 'Menu' },
    { tab: 'about', label: 'About' },
    { tab: 'reviews', label: 'Reviews' },
    { tab: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: PageTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF9F5]/95 backdrop-blur-md shadow-xs border-b border-[#E6E1D8]'
          : 'bg-[#FBF9F5]/80 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      {/* Top micro-bar with verified details */}
      <div className="border-b border-[#EDE8DF] bg-[#F4EFE6] px-4 py-1.5 text-xs text-[#5C5549] hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-medium text-[#2E2822]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              {RESTAURANT.hoursText}
            </span>
            <span className="text-[#A39988]">|</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
              {RESTAURANT.address}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-semibold text-[#C85A32]">
              <Star className="w-3.5 h-3.5 fill-[#C85A32]" />
              {RESTAURANT.rating} / 5
            </span>
            <span className="text-[#786F62]">({RESTAURANT.reviewCount.toLocaleString()} reviews)</span>
            <span className="text-[#A39988]">|</span>
            <span className="font-medium text-[#3A332B]">{RESTAURANT.priceRange}</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <button
            id="nav-brand-btn"
            onClick={() => handleNavClick('home')}
            className="flex flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-xs"
            aria-label="Fellows Faubourg Saint-Denis - Go to Homepage"
          >
            <span className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-[#1F1B16] uppercase">
              FELLOWS
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#8C6D53] font-medium -mt-1">
              Faubourg Saint-Denis · Paris 10
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.tab}
                id={`nav-link-${item.tab}`}
                onClick={() => handleNavClick(item.tab)}
                className={`text-sm font-medium transition-colors duration-200 py-1 border-b-2 ${
                  activeTab === item.tab
                    ? 'text-[#C85A32] border-[#C85A32] font-semibold'
                    : 'text-[#50483E] border-transparent hover:text-[#C85A32]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-menu-btn"
              onClick={() => handleNavClick('menu')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#4A4036] hover:text-[#1F1B16] border border-[#D5CEC2] hover:border-[#A39988] rounded-md transition-all duration-200"
            >
              <Utensils className="w-3.5 h-3.5" />
              Menu
            </button>
            <button
              id="nav-book-btn"
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A32] hover:bg-[#B34D27] shadow-xs rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C85A32]"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book a Table
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-book-btn-compact"
              onClick={onOpenReservation}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#C85A32] rounded-md"
            >
              Book
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#3D352C] hover:text-[#1F1B16] focus:outline-none focus:ring-2 focus:ring-[#C85A32] rounded-md"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#E6E0D6] bg-[#FBF9F5] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <div className="pb-3 border-b border-[#EAE4D9] flex items-center justify-between text-xs text-[#6B6256]">
            <span className="flex items-center gap-1.5 font-medium text-[#1F1B16]">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              {RESTAURANT.hoursText}
            </span>
            <span className="font-semibold text-[#C85A32]">★ 4.8 / 5</span>
          </div>

          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.tab}
                id={`mobile-nav-${item.tab}`}
                onClick={() => handleNavClick(item.tab)}
                className={`text-left px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  activeTab === item.tab
                    ? 'bg-[#F2EAE0] text-[#C85A32] font-semibold'
                    : 'text-[#473F35] hover:bg-[#F6F1EA]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button
              id="mobile-drawer-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#C85A32] hover:bg-[#B34D27] rounded-md shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              Book a Table (SevenRooms)
            </button>
            <a
              id="mobile-drawer-menu-link"
              href={RESTAURANT.menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#4A4036] border border-[#D5CEC2] rounded-md text-center"
            >
              <Utensils className="w-3.5 h-3.5" />
              Official Carte PDF / Online
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
