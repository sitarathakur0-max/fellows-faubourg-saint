import React from 'react';
import { PageTab } from '../types';
import { RESTAURANT } from '../data/restaurantData';
import { Star, MapPin, Clock, Utensils, ExternalLink, Calendar, Compass, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenReservation }) => {
  return (
    <footer className="bg-[#1C1917] text-[#E7E2D9] pt-16 pb-12 border-t border-[#292524]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2E2926]">
          {/* Brand & Identity */}
          <div className="space-y-4">
            <div>
              <span className="font-serif-display text-2xl font-bold tracking-tight text-white uppercase">
                FELLOWS
              </span>
              <p className="text-xs uppercase tracking-widest text-[#C85A32] font-semibold mt-0.5">
                Faubourg Saint-Denis
              </p>
            </div>
            <p className="text-sm text-[#A8A29E] leading-relaxed">
              A contemporary Parisian vegetarian restaurant celebrating fresh homemade pasta, bold Mediterranean zaatar, and generous seasonal recipes.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#292524] text-xs text-[#E7E2D9] border border-[#3E3835]">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>{RESTAURANT.type} · Paris 10</span>
            </div>
          </div>

          {/* Visit & Hours */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#C85A32] font-bold">
              Location & Hours
            </h3>
            <div className="space-y-2 text-sm text-[#D6D3D1]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                <span>
                  84 Rue du Faubourg Saint-Denis
                  <br />
                  75010 Paris, France
                </span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white">{RESTAURANT.hoursText}</span>
                  <p className="text-xs text-[#A8A29E] mt-0.5">Open 7 days a week until 23:00</p>
                </div>
              </div>
              <div className="pt-2">
                <a
                  id="footer-directions-link"
                  href={RESTAURANT.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E2725B] hover:text-[#FFA07A] transition-colors"
                >
                  <Compass className="w-3.5 h-3.5" />
                  Get Walking / Transit Directions
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links & Service */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#C85A32] font-bold">
              Explore & Menu
            </h3>
            <ul className="space-y-2 text-sm text-[#D6D3D1]">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => {
                    onSelectTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-menu"
                  onClick={() => {
                    onSelectTab('menu');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Specialties & Fresh Pasta
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => {
                    onSelectTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Our Vegetarian Identity
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-reviews"
                  onClick={() => {
                    onSelectTab('reviews');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Guest Reviews ({RESTAURANT.reviewCount.toLocaleString()})
                </button>
              </li>
              <li>
                <a
                  id="footer-official-carte-link"
                  href={RESTAURANT.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#E2725B] hover:text-[#FFA07A]"
                >
                  <Utensils className="w-3.5 h-3.5" />
                  Official Online Menu
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Rating & Reservations */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#C85A32] font-bold">
              Guest Confidence & Table Booking
            </h3>
            <div className="bg-[#292524] p-4 rounded-lg border border-[#3E3835]">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white text-base">4.8 / 5</span>
              </div>
              <p className="text-xs text-[#A8A29E] mt-1">
                Based on <strong className="text-white font-medium">{RESTAURANT.reviewCount.toLocaleString()}</strong> authentic diner reviews
              </p>
              <div className="mt-3 pt-3 border-t border-[#3E3835] flex justify-between text-xs text-[#D6D3D1]">
                <span>Services:</span>
                <span className="font-medium text-white">{RESTAURANT.services.join(' · ')}</span>
              </div>
              <div className="flex justify-between text-xs text-[#D6D3D1] mt-1">
                <span>Price range:</span>
                <span className="font-medium text-white">{RESTAURANT.priceRange}</span>
              </div>
            </div>

            <button
              id="footer-booking-btn"
              onClick={onOpenReservation}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A32] hover:bg-[#B34D27] rounded-md transition-colors shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              Reserve on SevenRooms
            </button>
          </div>
        </div>

        {/* Bottom copyright & integrity badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Fellows Faubourg Saint-Denis · All verified details provided directly from restaurant sources.</span>
          </div>
          <p>© {new Date().getFullYear()} Fellows. 84 Rue du Faubourg Saint-Denis, 75010 Paris.</p>
        </div>
      </div>
    </footer>
  );
};
