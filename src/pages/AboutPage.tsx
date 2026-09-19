import React from 'react';
import { PageTab } from '../types';
import { RESTAURANT, IMAGES } from '../data/restaurantData';
import { MapPin, Clock, Utensils, Star, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onOpenReservation: () => void;
  onSelectTab: (tab: PageTab) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenReservation, onSelectTab }) => {
  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2ECE1] text-xs font-semibold uppercase tracking-widest text-[#8C4A2F]">
          <MapPin className="w-3.5 h-3.5" />
          Paris 10e · 84 Rue du Faubourg Saint-Denis
        </div>
        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight text-[#1F1B16] leading-tight">
          A contemporary vegetarian table in Paris.
        </h1>
        <p className="text-base sm:text-lg text-[#554D42] leading-relaxed">
          Fellows Faubourg Saint-Denis is a dedicated vegetarian restaurant situated in one of the most vibrant, diverse, and food-loving neighborhoods of Paris.
        </p>
      </div>

      {/* Main Narrative & Atmosphere Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6 text-[#4F473D] text-sm sm:text-base leading-relaxed">
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1F1B16]">
            The Vegetarian Philosophy
          </h2>
          <p>
            Fellows was conceived around a simple yet uncompromising premise: plant-based dining should be generous, celebratory, and rich in culinary comfort. Rather than mimicking meat, our cooking highlights the natural richness of fresh pasta dough, emulsified butter and cheeses, cold-pressed olive oils, and lively Mediterranean aromatics like wild zaatar.
          </p>
          <p>
            Whether you are joining us for a rapid midday lunch or a celebratory late dinner with friends, our tables are designed to feel warm, lively, and approachable.
          </p>

          <div className="pt-2 border-t border-[#EAE4D8] space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1F1B16] block text-sm">Dedicated Vegetarian Kitchen</strong>
                <span className="text-xs text-[#6B6153]">All dishes, fresh pastas, and sauces are entirely vegetarian.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1F1B16] block text-sm">Approachable Price Point</strong>
                <span className="text-xs text-[#6B6153]">Average price is €10–30 per person with generous portions.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1F1B16] block text-sm">Dine-in and Delivery</strong>
                <span className="text-xs text-[#6B6153]">Available for both a cozy in-restaurant dining experience and home delivery.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E0D7C9]">
            <img
              src={IMAGES.interior}
              alt="Dining atmosphere inside Fellows Faubourg Saint-Denis"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Location & Neighborhood context */}
      <div className="bg-[#F6EFE6] rounded-2xl p-8 sm:p-12 border border-[#E5DCD0]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-widest text-[#C85A32] font-bold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Neighborhood
            </div>
            <h3 className="font-serif-display text-xl font-bold text-[#1F1B16]">
              Rue du Faubourg Saint-Denis
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5346] leading-relaxed">
              Located in Paris 10, between Porte Saint-Denis and Gare de l'Est. A storied, energetic street celebrated for its culinary diversity and Parisian pulse.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs uppercase tracking-widest text-[#C85A32] font-bold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Hours & Service
            </div>
            <h3 className="font-serif-display text-xl font-bold text-[#1F1B16]">
              Daily Until 11:00 PM
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5346] leading-relaxed">
              Serving continuous dining 7 days a week. Ideal for early lunches or late-night Parisian dinners.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs uppercase tracking-widest text-[#C85A32] font-bold flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5" />
              Community Trust
            </div>
            <h3 className="font-serif-display text-xl font-bold text-[#1F1B16]">
              4.8 / 5 Rating
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5346] leading-relaxed">
              Over 8,722 verified diners have shared their experiences, praising the generous pasta dishes and welcoming team.
            </p>
          </div>
        </div>
      </div>

      {/* Next Step Action */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#EAE4D8]">
        <div>
          <h4 className="font-serif-display text-xl font-bold text-[#1F1B16]">
            Experience Fellows in person
          </h4>
          <p className="text-xs sm:text-sm text-[#6E6456]">
            Reservations are handled directly via SevenRooms.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelectTab('menu')}
            className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#3D352C] bg-white border border-[#D5CEC2] rounded-md hover:bg-[#F2ECE1] transition-colors"
          >
            Explore Menu
          </button>
          <button
            onClick={onOpenReservation}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A32] hover:bg-[#B34D27] rounded-md transition-colors shadow-xs"
          >
            Book on SevenRooms
          </button>
        </div>
      </div>
    </div>
  );
};
