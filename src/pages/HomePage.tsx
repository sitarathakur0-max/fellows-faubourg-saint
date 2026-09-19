import React from 'react';
import { PageTab } from '../types';
import { RESTAURANT, FOOD_HIGHLIGHTS, IMAGES, VERIFIED_REVIEWS } from '../data/restaurantData';
import { Star, MapPin, Clock, Utensils, Calendar, ArrowRight, ShieldCheck, Sparkles, ExternalLink, Heart } from 'lucide-react';

interface HomePageProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenReservation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectTab, onOpenReservation }) => {
  return (
    <div className="space-y-24 pb-20">
      {/* Editorial Hero Section */}
      <section className="relative pt-32 sm:pt-36 lg:pt-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Neighborhood & Type Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2ECE1] border border-[#E3DACB] text-xs font-semibold uppercase tracking-widest text-[#8C4A2F]">
              <span className="w-2 h-2 rounded-full bg-[#C85A32]"></span>
              Vegetarian Restaurant · Paris 10
            </div>

            {/* Original Headline */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F1B16] leading-[1.12]">
              Generous vegetarian dining, crafted with Parisian spirit.
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-base sm:text-lg text-[#554D42] leading-relaxed max-w-2xl">
              Fresh handmade pasta, comforting butter and cheese emulsions, and the punchy aroma of wild zaatar. Fellows brings an energetic, approachable vegetarian table to the heart of Rue du Faubourg Saint-Denis.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-primary-book-btn"
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#C85A32] hover:bg-[#B34D27] rounded-md shadow-md hover:shadow-lg transition-all transform active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                Book a Table
              </button>
              <button
                id="hero-secondary-menu-btn"
                onClick={() => onSelectTab('menu')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#3D352C] bg-white hover:bg-[#F6F1EA] border border-[#D5CEC2] rounded-md transition-all"
              >
                <Utensils className="w-4 h-4 text-[#C85A32]" />
                Explore the Menu
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Hero Trust & Fact Badges */}
            <div className="pt-6 border-t border-[#EAE4D8] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#52493E]">
              <div className="space-y-1">
                <div className="flex items-center gap-1 font-bold text-[#C85A32] text-sm">
                  <Star className="w-4 h-4 fill-[#C85A32]" />
                  <span>{RESTAURANT.rating} / 5</span>
                </div>
                <div className="text-[#786E61]">{RESTAURANT.reviewCount.toLocaleString()} reviews</div>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-[#1F1B16] text-sm">{RESTAURANT.priceRange}</div>
                <div className="text-[#786E61]">Generous portions</div>
              </div>

              <div className="space-y-1">
                <div className="font-semibold text-[#1F1B16] text-sm">Paris 10e</div>
                <div className="text-[#786E61]">Faubourg Saint-Denis</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 font-semibold text-emerald-700 text-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span>{RESTAURANT.hoursText}</span>
                </div>
                <div className="text-[#786E61]">Dine-in · Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E8E1D5] bg-[#EBE5DC]">
              <img
                src={IMAGES.hero}
                alt="Table setting at Fellows Faubourg Saint-Denis featuring artisan fresh vegetarian pasta and warm bread"
                referrerPolicy="no-referrer"
                loading="eager"
                className="w-full h-auto aspect-16/9 lg:aspect-4/5 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs p-3 rounded-lg bg-black/40 backdrop-blur-xs flex items-center justify-between">
                <div>
                  <span className="font-semibold block text-sm">84 Rue du Faubourg Saint-Denis</span>
                  <span className="text-[#E5DDD0] text-[11px]">75010 Paris · Daily until 11:00 PM</span>
                </div>
                <span className="px-2.5 py-1 rounded-sm bg-[#C85A32] text-white text-[10px] font-bold uppercase tracking-wider">
                  SevenRooms
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Food Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#C85A32] font-bold">
            Crafted In-House Daily
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1F1B16]">
            Signature Homemade Pastas & Specialties
          </h2>
          <p className="text-sm sm:text-base text-[#5C5346] leading-relaxed">
            Every dish at Fellows is 100% vegetarian, focusing on the texture of fresh pasta, the warmth of melted cheese, and comforting Mediterranean accents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Feature Card (Pasta) */}
          <div className="lg:col-span-5 rounded-xl overflow-hidden border border-[#E5DDD0] bg-white shadow-sm">
            <div className="relative">
              <img
                src={IMAGES.pasta}
                alt="Close-up of fresh homemade pasta twirled with butter, cheese and zaatar at Fellows"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-64 sm:h-72 object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#C85A32] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                Guest Favorite
              </div>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-serif-display text-xl font-bold text-[#1F1B16]">
                  The Bestseller & Zaatar Twists
                </h3>
                <span className="text-xs text-[#8C4A2F] font-semibold uppercase tracking-wider">
                  Fresh Pasta
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#5C5346] leading-relaxed">
                Known across Paris 10 for generous fresh pasta twirled in French butter and rich cheese, alongside our house Cacio E Zaatar creation.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-[#F0EBE1] text-xs text-[#736859]">
                <span>Price range: €10–30</span>
                <button
                  onClick={() => onSelectTab('menu')}
                  className="font-semibold text-[#C85A32] hover:text-[#9A3C1A] inline-flex items-center gap-1"
                >
                  See all specialties <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Grid of Verified Highlights */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FOOD_HIGHLIGHTS.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-xl bg-white border border-[#E8E1D5] shadow-2xs hover:border-[#C85A32]/60 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs ${
                        item.isBestseller
                          ? 'bg-[#EBF5EE] text-emerald-800'
                          : 'bg-[#F5EFE6] text-[#85452D]'
                      }`}
                    >
                      {item.badge}
                    </span>
                    <span className="text-[11px] text-[#8C8274] font-medium capitalize">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="font-serif-display text-lg font-bold text-[#1F1B16]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#5C5346] mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Menu CTA */}
        <div className="mt-12 text-center">
          <button
            id="food-section-view-menu-btn"
            onClick={() => onSelectTab('menu')}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#1F1B16] hover:bg-[#332D26] rounded-md transition-colors shadow-sm"
          >
            <Utensils className="w-4 h-4" />
            View Full Menu & Official Carte
          </button>
        </div>
      </section>

      {/* Restaurant Character & Atmosphere */}
      <section className="bg-[#F3ECE1] py-16 sm:py-20 border-y border-[#E5DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C85A32] font-bold">
                The Fellows Experience
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1F1B16] leading-tight">
                Vibrant Parisian energy in the 10th arrondissement.
              </h2>
              <p className="text-sm sm:text-base text-[#52493E] leading-relaxed">
                Set right on <strong>Rue du Faubourg Saint-Denis</strong>, Fellows brings an artistic, welcoming dining room where guests gather for lunch, dinner, or delivery.
              </p>
              <p className="text-sm sm:text-base text-[#52493E] leading-relaxed">
                As a dedicated vegetarian restaurant, every plate is crafted to be satisfying and full of character — proving that plant-based dining can be deeply comforting, generous, and unpretentious.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-[#FAF7F0] border border-[#E1D8CA]">
                  <div className="font-serif-display text-xl font-bold text-[#1F1B16]">Dine-In</div>
                  <p className="text-xs text-[#6B6153] mt-1">
                    Warm bistro tables, open until 11:00 PM nightly.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#FAF7F0] border border-[#E1D8CA]">
                  <div className="font-serif-display text-xl font-bold text-[#1F1B16]">Delivery</div>
                  <p className="text-xs text-[#6B6153] mt-1">
                    Enjoy our fresh pasta and specialties at home across Paris.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenReservation}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C85A32] hover:text-[#9A3C1A] transition-colors"
                >
                  Reserve your table on SevenRooms <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#DCD3C5]">
                <img
                  src={IMAGES.interior}
                  alt="Atmospheric interior of Fellows restaurant in Paris 10th arrondissement"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Reviews Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-widest text-[#C85A32] font-bold">
                Guest Reviews
              </span>
              <span className="text-xs text-[#786E61]">· Verified Feedback</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1F1B16]">
              Rated 4.8 / 5 across 8,722 reviews
            </h2>
          </div>

          <button
            onClick={() => onSelectTab('reviews')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C85A32] hover:text-[#9A3C1A]"
          >
            Read all guest reviews <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERIFIED_REVIEWS.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-xl bg-white border border-[#E8E1D5] shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs text-[#8C8274]">{review.date}</span>
                </div>
                <p className="text-sm text-[#473F35] leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {review.highlightDish && (
                <div className="mt-4 pt-3 border-t border-[#F2EDE4] flex items-center justify-between text-xs">
                  <span className="text-[#786E61] font-medium">{review.author}</span>
                  <span className="font-semibold text-[#8C4A2F]">{review.highlightDish}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Practical Booking & Visit CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#241F1A] text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-[#3E3832] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-[#E2725B] font-bold">
              Join Us in Paris 10
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold">
              Ready to taste authentic fresh pasta?
            </h2>
            <p className="text-xs sm:text-sm text-[#C8C0B5] max-w-xl">
              Open 7 days a week until 11:00 PM at 84 Rue du Faubourg Saint-Denis. Reserve online via SevenRooms to secure your table.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C85A32] hover:bg-[#B34D27] rounded-md transition-all text-center shadow-md"
            >
              Book a Table (SevenRooms)
            </button>
            <a
              href={RESTAURANT.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#EAE4D9] hover:text-white border border-[#4D453E] hover:border-[#6B6158] rounded-md transition-all text-center flex items-center justify-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5" />
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
