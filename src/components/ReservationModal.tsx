import React, { useState } from 'react';
import { RESTAURANT } from '../data/restaurantData';
import { Calendar, Users, Clock, ExternalLink, X, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [guests, setGuests] = useState('2');
  const [selectedService, setSelectedService] = useState<'lunch' | 'dinner'>('dinner');

  if (!isOpen) return null;

  const handleProceedToSevenRooms = () => {
    // Open the official SevenRooms reservation system in a new tab
    window.open(RESTAURANT.reservationUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-[#FDFBF7] rounded-xl shadow-2xl border border-[#E3DCD1] overflow-hidden text-[#1F1B16]">
        {/* Header */}
        <div className="bg-[#241F1A] text-white p-6 relative">
          <button
            id="close-reservation-modal"
            onClick={onClose}
            className="absolute top-4 right-4 text-[#A8A29E] hover:text-white p-1 rounded-md transition-colors"
            aria-label="Close reservation modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E2725B] font-semibold mb-1">
            <Calendar className="w-3.5 h-3.5" />
            Direct Table Booking
          </div>
          <h2 id="reservation-modal-title" className="font-serif-display text-2xl font-bold">
            Reserve at Fellows
          </h2>
          <p className="text-xs text-[#C5BEB3] mt-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#E2725B]" />
            84 Rue du Faubourg Saint-Denis, 75010 Paris
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="bg-[#F3EDE2] border border-[#E5DDD0] rounded-lg p-3.5 flex items-start gap-3 text-xs text-[#52493E]">
            <CheckCircle2 className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#29221B]">Official SevenRooms Partner</span>
              <p className="mt-0.5 text-[#63594D]">
                Fellows Faubourg Saint-Denis uses SevenRooms for live, confirmed table reservations. No phone bookings needed.
              </p>
            </div>
          </div>

          {/* Quick Party Size Picker */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B5E4F] mb-2">
              Number of Guests
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {['1', '2', '3', '4', '5', '6+'].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setGuests(num)}
                  className={`py-2 px-3 text-sm font-semibold rounded-md border transition-all ${
                    guests === num
                      ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-xs'
                      : 'bg-white text-[#4A4136] border-[#DCD5C9] hover:border-[#C85A32]'
                  }`}
                >
                  <Users className="w-3 h-3 inline mr-1 opacity-70" />
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Service Time Option */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B5E4F] mb-2">
              Dining Service
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedService('lunch')}
                className={`p-3 text-left rounded-md border text-xs transition-all ${
                  selectedService === 'lunch'
                    ? 'bg-[#FAF3EA] border-[#C85A32] text-[#2E251D] ring-1 ring-[#C85A32]'
                    : 'bg-white border-[#DCD5C9] text-[#5A5145] hover:border-[#B5ACA0]'
                }`}
              >
                <div className="font-semibold text-sm text-[#1F1B16]">Lunch Service</div>
                <div className="text-[11px] text-[#786D5F] mt-0.5">12:00 PM – 3:30 PM</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedService('dinner')}
                className={`p-3 text-left rounded-md border text-xs transition-all ${
                  selectedService === 'dinner'
                    ? 'bg-[#FAF3EA] border-[#C85A32] text-[#2E251D] ring-1 ring-[#C85A32]'
                    : 'bg-white border-[#DCD5C9] text-[#5A5145] hover:border-[#B5ACA0]'
                }`}
              >
                <div className="font-semibold text-sm text-[#1F1B16]">Dinner Service</div>
                <div className="text-[11px] text-[#786D5F] mt-0.5">7:00 PM – Closes 11 PM</div>
              </button>
            </div>
          </div>

          {/* Hours & Notice */}
          <div className="flex items-center justify-between text-xs text-[#6E6456] pt-1">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#C85A32]" />
              Continuous service · Closes 11 PM
            </span>
            <span className="font-medium text-[#2E251D]">€10–30 per person</span>
          </div>

          {/* Direct CTA */}
          <div className="pt-2 space-y-2">
            <button
              id="confirm-sevenrooms-booking-btn"
              onClick={handleProceedToSevenRooms}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 text-sm font-semibold uppercase tracking-wider text-white bg-[#C85A32] hover:bg-[#B34D27] rounded-md transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C85A32]"
            >
              <span>Continue on SevenRooms ({guests} {guests === '1' ? 'Guest' : 'Guests'})</span>
              <ExternalLink className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-[#8C8275]">
              You will be redirected directly to the official SevenRooms booking calendar for Fellows Faubourg Saint-Denis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
