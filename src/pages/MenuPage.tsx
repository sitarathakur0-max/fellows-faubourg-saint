import React, { useState } from 'react';
import { PageTab } from '../types';
import { RESTAURANT, FOOD_HIGHLIGHTS, IMAGES } from '../data/restaurantData';
import { Utensils, ExternalLink, Calendar, Star, Info, ArrowUpRight } from 'lucide-react';

interface MenuPageProps {
  onOpenReservation: () => void;
  onSelectTab: (tab: PageTab) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onOpenReservation, onSelectTab }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pasta' | 'antipasti' | 'dessert'>('all');

  const filteredItems = activeCategory === 'all'
    ? FOOD_HIGHLIGHTS
    : FOOD_HIGHLIGHTS.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2ECE1] text-xs font-semibold uppercase tracking-widest text-[#8C4A2F]">
          <Utensils className="w-3.5 h-3.5" />
          100% Vegetarian Carte
        </div>
        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight text-[#1F1B16]">
          The Fellows Menu
        </h1>
        <p className="text-base sm:text-lg text-[#554D42] leading-relaxed">
          Celebrating generous fresh pasta, velvety emulsions, and aromatic Mediterranean accents. All recipes are prepared vegetarian in the 10th arrondissement of Paris.
        </p>

        {/* Pricing & Service Notice */}
        <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-[#6B6153]">
          <span>
            <strong className="text-[#1F1B16]">Price Range:</strong> {RESTAURANT.priceRange}
          </span>
          <span>•</span>
          <span>
            <strong className="text-[#1F1B16]">Hours:</strong> {RESTAURANT.hoursText}
          </span>
          <span>•</span>
          <span>
            <strong className="text-[#1F1B16]">Service:</strong> {RESTAURANT.services.join(' & ')}
          </span>
        </div>
      </div>

      {/* Official Menu Link Alert Box */}
      <div className="bg-[#FAF5ED] border border-[#E4DACB] rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#52493E]">
            <span className="font-bold text-[#1F1B16] block">
              Live Seasonal Carte & Official Menu
            </span>
            <span>
              Our dishes and seasonal variations rotate regularly. For the complete up-to-the-minute daily carte, consult our official restaurant menu.
            </span>
          </div>
        </div>
        <a
          id="menu-official-link-btn"
          href={RESTAURANT.menuUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1F1B16] hover:bg-[#332C24] rounded-md transition-colors shadow-xs"
        >
          <span>Open Official Menu</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Visual Break with 2 Curated Visuals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl overflow-hidden border border-[#E5DED2] relative group">
          <img
            src={IMAGES.pasta}
            alt="Handmade fresh pasta with butter and cheese at Fellows Faubourg Saint-Denis"
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[11px] uppercase tracking-widest text-[#E2725B] font-bold block">
              Identified Bestseller
            </span>
            <span className="font-serif-display text-xl font-bold">
              Fresh Homemade Pasta with Butter & Cheese
            </span>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-[#E5DED2] relative group">
          <img
            src={IMAGES.focaccia}
            alt="Artisanal focaccia and zucchini appetizer at Fellows"
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[11px] uppercase tracking-widest text-[#E2725B] font-bold block">
              Baked In-House Daily
            </span>
            <span className="font-serif-display text-xl font-bold">
              Artisan Focaccia & Ribbon Zucchini
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-[#E5DED2] pb-4 overflow-x-auto">
        {[
          { key: 'all', label: 'All Highlights' },
          { key: 'pasta', label: 'Fresh Pastas' },
          { key: 'antipasti', label: 'Breads & Starters' },
          { key: 'dessert', label: 'Desserts' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveCategory(tab.key as any)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all whitespace-nowrap ${
              activeCategory === tab.key
                ? 'bg-[#C85A32] text-white shadow-xs'
                : 'text-[#5A5145] hover:bg-[#F2ECE1]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Menu Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-xl bg-white border border-[#E5DED2] shadow-xs hover:border-[#C85A32]/60 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-xs ${
                    item.isBestseller
                      ? 'bg-[#EBF5EE] text-emerald-800'
                      : 'bg-[#F5ECE1] text-[#8C4A2F]'
                  }`}
                >
                  {item.badge}
                </span>
                <span className="text-xs text-[#786E61] capitalize">
                  {item.category === 'antipasti' ? 'Starter / Bread' : item.category}
                </span>
              </div>

              <h3 className="font-serif-display text-xl font-bold text-[#1F1B16]">
                {item.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#554D42] mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#F2ECE1] flex items-center justify-between text-xs text-[#786E61]">
              <span>Average meal: €10–30</span>
              <span className="font-medium text-[#C85A32]">Vegetarian</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Booking / Carte Callout */}
      <div className="bg-[#FAF7F0] border border-[#E2D8C9] rounded-xl p-8 text-center space-y-4">
        <h2 className="font-serif-display text-2xl font-bold text-[#1F1B16]">
          Planning a meal at Fellows?
        </h2>
        <p className="text-xs sm:text-sm text-[#5C5346] max-w-xl mx-auto">
          Due to high demand during dinner service, we encourage booking your table ahead on SevenRooms.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <button
            onClick={onOpenReservation}
            className="px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A32] hover:bg-[#B34D27] rounded-md shadow-xs transition-colors"
          >
            <Calendar className="w-4 h-4 inline mr-1.5" />
            Book a Table on SevenRooms
          </button>
          <a
            href={RESTAURANT.menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#3D352C] bg-white hover:bg-[#F2ECE1] border border-[#D5CEC2] rounded-md transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 inline mr-1.5" />
            View Official Menu Site
          </a>
        </div>
      </div>
    </div>
  );
};
