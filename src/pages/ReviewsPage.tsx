import React, { useState } from 'react';
import { PageTab } from '../types';
import { RESTAURANT, VERIFIED_REVIEWS } from '../data/restaurantData';
import { Star, MessageSquare, ThumbsUp, Calendar, CheckCircle, AlertTriangle, ShieldCheck } from 'lucide-react';

interface ReviewsPageProps {
  onOpenReservation: () => void;
  onSelectTab: (tab: PageTab) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenReservation }) => {
  const [filter, setFilter] = useState<'all' | 'positive' | 'balanced'>('all');

  const displayedReviews = filter === 'all'
    ? VERIFIED_REVIEWS
    : VERIFIED_REVIEWS.filter((r) => r.type === filter);

  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2ECE1] text-xs font-semibold uppercase tracking-widest text-[#8C4A2F]">
          <Star className="w-3.5 h-3.5 fill-[#C85A32] text-[#C85A32]" />
          Verified Diner Feedback
        </div>
        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight text-[#1F1B16]">
          What Guests Say About Fellows
        </h1>
        <p className="text-base sm:text-lg text-[#554D42] leading-relaxed">
          With an outstanding 4.8 out of 5 average rating from more than 8,700 diners, Fellows is cherished for generous portions, rich fresh pasta, and honest Parisian energy.
        </p>
      </div>

      {/* Aggregate Score & Distribution Panel */}
      <div className="bg-white rounded-2xl p-8 border border-[#E5DCD0] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Big Score */}
        <div className="lg:col-span-4 text-center lg:text-left lg:border-r border-[#EFE9DF] lg:pr-8 space-y-2">
          <div className="font-serif-display text-6xl sm:text-7xl font-bold text-[#1F1B16]">
            {RESTAURANT.rating}
            <span className="text-2xl sm:text-3xl text-[#8C8275] font-normal"> / 5</span>
          </div>
          <div className="flex justify-center lg:justify-start text-amber-500 gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-500" />
            ))}
          </div>
          <p className="text-sm font-semibold text-[#1F1B16] pt-1">
            Based on {RESTAURANT.reviewCount.toLocaleString()} verified reviews
          </p>
          <p className="text-xs text-[#7A7165]">
            Consistently recognized for fresh pasta craftsmanship and hearty vegetarian comfort.
          </p>
        </div>

        {/* Rating Breakdown */}
        <div className="lg:col-span-5 space-y-2.5 text-xs text-[#5C5346]">
          <div className="flex items-center gap-3">
            <span className="w-12 font-medium">5 stars</span>
            <div className="flex-1 bg-[#F0EAE1] h-2.5 rounded-full overflow-hidden">
              <div className="bg-[#C85A32] h-full rounded-full w-[86%]" />
            </div>
            <span className="w-10 text-right text-[#8A8174]">86%</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-12 font-medium">4 stars</span>
            <div className="flex-1 bg-[#F0EAE1] h-2.5 rounded-full overflow-hidden">
              <div className="bg-[#C85A32] h-full rounded-full w-[10%]" />
            </div>
            <span className="w-10 text-right text-[#8A8174]">10%</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-12 font-medium">3 stars</span>
            <div className="flex-1 bg-[#F0EAE1] h-2.5 rounded-full overflow-hidden">
              <div className="bg-[#C85A32] h-full rounded-full w-[3%]" />
            </div>
            <span className="w-10 text-right text-[#8A8174]">3%</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-12 font-medium">2 & 1 star</span>
            <div className="flex-1 bg-[#F0EAE1] h-2.5 rounded-full overflow-hidden">
              <div className="bg-[#C85A32] h-full rounded-full w-[1%]" />
            </div>
            <span className="w-10 text-right text-[#8A8174]">1%</span>
          </div>
        </div>

        {/* Highlighted Insights */}
        <div className="lg:col-span-3 bg-[#FAF6F0] p-4 rounded-xl border border-[#E8DFC0] space-y-3 text-xs">
          <span className="font-bold text-[#1F1B16] uppercase tracking-wider text-[11px] block">
            Most Mentioned Highlights
          </span>
          <ul className="space-y-1.5 text-[#5C5346]">
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Generous pasta portions</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Marinated zucchini appetizer</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Butter & cheese fresh pasta</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Cacio E Zaatar signature</span>
            </li>
            <li className="flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Busy evenings: reserve on SevenRooms</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center justify-between border-b border-[#E5DDD0] pb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
              filter === 'all'
                ? 'bg-[#C85A32] text-white shadow-xs'
                : 'text-[#5C5346] hover:bg-[#F2ECE1]'
            }`}
          >
            All Reviews ({VERIFIED_REVIEWS.length})
          </button>
          <button
            onClick={() => setFilter('positive')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
              filter === 'positive'
                ? 'bg-[#C85A32] text-white shadow-xs'
                : 'text-[#5C5346] hover:bg-[#F2ECE1]'
            }`}
          >
            Food & Specialties
          </button>
          <button
            onClick={() => setFilter('balanced')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
              filter === 'balanced'
                ? 'bg-[#C85A32] text-white shadow-xs'
                : 'text-[#5C5346] hover:bg-[#F2ECE1]'
            }`}
          >
            Atmosphere & Tips
          </button>
        </div>

        <div className="text-xs text-[#7A7165] hidden sm:flex items-center gap-1">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Verified customer feedback</span>
        </div>
      </div>

      {/* Reviews Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedReviews.map((review) => (
          <div
            key={review.id}
            className="p-6 rounded-xl bg-white border border-[#E5DDD0] shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#F4EDE2] text-[#8C4A2F] font-bold text-xs flex items-center justify-center">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <span className="font-semibold text-[#1F1B16] text-sm block">
                      {review.author}
                    </span>
                    <span className="text-[11px] text-[#8C8275]">{review.date}</span>
                  </div>
                </div>

                <div className="flex text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4A4136] leading-relaxed italic">
                "{review.text}"
              </p>
            </div>

            {review.highlightDish && (
              <div className="mt-4 pt-3 border-t border-[#F2ECE1] flex items-center justify-between text-xs">
                <span className="text-[#8C8275]">Mentioned:</span>
                <span className="font-semibold text-[#8C4A2F] bg-[#FAF5EE] px-2 py-0.5 rounded-sm border border-[#EFE7DC]">
                  {review.highlightDish}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Booking Reminder Box */}
      <div className="bg-[#241F1A] text-white p-8 sm:p-10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h2 className="font-serif-display text-2xl font-bold">
            Join 8,700+ diners at Fellows
          </h2>
          <p className="text-xs sm:text-sm text-[#C8C0B5]">
            Avoid walk-in delays by securing your table online on SevenRooms.
          </p>
        </div>

        <button
          onClick={onOpenReservation}
          className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A32] hover:bg-[#B34D27] rounded-md transition-colors shadow-md whitespace-nowrap"
        >
          <Calendar className="w-4 h-4 inline mr-1.5" />
          Book on SevenRooms
        </button>
      </div>
    </div>
  );
};
