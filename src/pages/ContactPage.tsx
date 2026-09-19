import React from 'react';
import { PageTab } from '../types';
import { RESTAURANT } from '../data/restaurantData';
import { MapPin, Clock, Calendar, ExternalLink, Compass, Train, Utensils, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactPageProps {
  onOpenReservation: () => void;
  onSelectTab: (tab: PageTab) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenReservation }) => {
  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2ECE1] text-xs font-semibold uppercase tracking-widest text-[#8C4A2F]">
          <MapPin className="w-3.5 h-3.5" />
          Location & Access
        </div>
        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight text-[#1F1B16]">
          Visit Fellows Faubourg Saint-Denis
        </h1>
        <p className="text-base sm:text-lg text-[#554D42] leading-relaxed">
          Located in Paris 10e, we welcome you 7 days a week for lunch, dinner, or delivery.
        </p>
      </div>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Essential Details Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl p-7 border border-[#E5DCD0] shadow-sm space-y-6">
            <h2 className="font-serif-display text-2xl font-bold text-[#1F1B16] border-b border-[#F0EAE0] pb-4">
              Restaurant Details
            </h2>

            {/* Address */}
            <div className="space-y-1.5">
              <span className="text-xs uppercase tracking-wider text-[#8C4A2F] font-bold flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                Address
              </span>
              <p className="text-base font-semibold text-[#1F1B16]">
                84 Rue du Faubourg Saint-Denis
              </p>
              <p className="text-sm text-[#665D50]">
                75010 Paris, France (10e arrondissement)
              </p>
            </div>

            {/* Hours */}
            <div className="space-y-1.5 pt-2 border-t border-[#F0EAE0]">
              <span className="text-xs uppercase tracking-wider text-[#8C4A2F] font-bold flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                Hours
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
                <p className="text-base font-semibold text-[#1F1B16]">
                  {RESTAURANT.hoursText}
                </p>
              </div>
              <p className="text-xs text-[#665D50]">
                Open Monday through Sunday · 12:00 PM – 11:00 PM
              </p>
            </div>

            {/* Price & Services */}
            <div className="space-y-3 pt-2 border-t border-[#F0EAE0]">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8C4A2F] font-bold block mb-1">
                  Average Price
                </span>
                <span className="text-base font-semibold text-[#1F1B16]">
                  {RESTAURANT.priceRange}
                </span>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#8C4A2F] font-bold block mb-1">
                  Available Services
                </span>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-3 py-1 bg-[#F4EFE6] text-[#42392F] font-semibold rounded-full border border-[#E3DAD0]">
                    Dine-in
                  </span>
                  <span className="px-3 py-1 bg-[#F4EFE6] text-[#42392F] font-semibold rounded-full border border-[#E3DAD0]">
                    Delivery
                  </span>
                  <span className="px-3 py-1 bg-[#EBF5EE] text-emerald-800 font-semibold rounded-full border border-[#CDE5D5]">
                    Vegetarian
                  </span>
                </div>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="pt-4 border-t border-[#F0EAE0] space-y-3">
              <button
                id="contact-book-btn"
                onClick={onOpenReservation}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A32] hover:bg-[#B34D27] rounded-md transition-colors shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Book a Table (SevenRooms)
              </button>

              <a
                id="contact-directions-btn"
                href={RESTAURANT.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#3D352C] bg-[#FAF6F0] hover:bg-[#F2EAE0] border border-[#D5CEC2] rounded-md transition-colors"
              >
                <Compass className="w-4 h-4 text-[#C85A32]" />
                Get Directions (Google Maps)
                <ExternalLink className="w-3.5 h-3.5 text-[#8C8275]" />
              </a>
            </div>
          </div>

          {/* Booking Notice */}
          <div className="bg-[#FAF7F0] border border-[#E6DDCE] rounded-xl p-5 text-xs text-[#5C5346] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#1F1B16]">
              <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
              Online Reservations Only
            </div>
            <p className="leading-relaxed">
              To ensure fast service and confirmed seating in our dining room, all reservations are organized digitally via SevenRooms. No phone bookings are taken.
            </p>
          </div>
        </div>

        {/* Right: Map & Getting Here */}
        <div className="lg:col-span-7 space-y-6">
          {/* Interactive Map Container */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#E5DCD0] shadow-sm">
            <div className="p-4 border-b border-[#EFEAE0] flex items-center justify-between bg-[#FBF9F5]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1F1B16]">
                <MapPin className="w-4 h-4 text-[#C85A32]" />
                84 Rue du Faubourg Saint-Denis, 75010 Paris
              </div>
              <a
                href={RESTAURANT.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#C85A32] hover:text-[#9A3C1A] inline-flex items-center gap-1"
              >
                Open in Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Google Maps Embed iframe centered on 84 Rue du Faubourg Saint-Denis 75010 Paris */}
            <div className="w-full h-80 sm:h-96 bg-[#EDE7DD] relative">
              <iframe
                title="Fellows Faubourg Saint-Denis Location Map"
                src="https://maps.google.com/maps?q=84+Rue+du+Faubourg+Saint-Denis+75010+Paris+France&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Transit & Access Points */}
          <div className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#E5DCD0] space-y-4">
            <h3 className="font-serif-display text-xl font-bold text-[#1F1B16] flex items-center gap-2">
              <Train className="w-5 h-5 text-[#C85A32]" />
              Getting Here via Paris Metro
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#52493E]">
              <div className="bg-white p-3.5 rounded-lg border border-[#E8E1D5]">
                <div className="font-bold text-[#1F1B16] text-sm mb-1">Château d'Eau</div>
                <div className="inline-block px-1.5 py-0.5 rounded-xs bg-[#BF478A] text-white font-bold text-[10px] mb-1.5">
                  Line 4
                </div>
                <p className="text-[11px] text-[#786E61]">2-minute walk (150m)</p>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-[#E8E1D5]">
                <div className="font-bold text-[#1F1B16] text-sm mb-1">Strasbourg Saint-Denis</div>
                <div className="flex gap-1 mb-1.5">
                  <span className="px-1.5 py-0.5 rounded-xs bg-[#BF478A] text-white font-bold text-[10px]">
                    Line 4
                  </span>
                  <span className="px-1.5 py-0.5 rounded-xs bg-[#9B98C1] text-white font-bold text-[10px]">
                    Line 8
                  </span>
                  <span className="px-1.5 py-0.5 rounded-xs bg-[#D5C900] text-[#1F1B16] font-bold text-[10px]">
                    Line 9
                  </span>
                </div>
                <p className="text-[11px] text-[#786E61]">6-minute walk (450m)</p>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-[#E8E1D5]">
                <div className="font-bold text-[#1F1B16] text-sm mb-1">Gare de l'Est</div>
                <div className="flex gap-1 mb-1.5">
                  <span className="px-1.5 py-0.5 rounded-xs bg-[#BF478A] text-white font-bold text-[10px]">
                    Line 4
                  </span>
                  <span className="px-1.5 py-0.5 rounded-xs bg-[#FF7E2E] text-white font-bold text-[10px]">
                    Line 5
                  </span>
                  <span className="px-1.5 py-0.5 rounded-xs bg-[#FA9ABA] text-white font-bold text-[10px]">
                    Line 7
                  </span>
                </div>
                <p className="text-[11px] text-[#786E61]">7-minute walk (550m)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
