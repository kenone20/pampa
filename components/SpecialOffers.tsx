
import React from 'react';
import { Offer } from '../types';
import { Sparkles, Calendar, ArrowRight, Tag } from 'lucide-react';

const offers: Offer[] = [
  {
    id: 1,
    title: "Agafay Sunset Oasis",
    subtitle: "Premium Day Experience",
    description: "Gourmet dinner under the stars, traditional camel caravan, and exclusive pool access in the stone desert.",
    price: "From $95",
    tag: "Trending",
    image: "https://images.unsplash.com/photo-1533050487297-09b450131914?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Sahara Golden Circuit",
    subtitle: "4 Days / 3 Nights",
    description: "Cross the High Atlas to the deep dunes of Merzouga. Includes 5* bivouac and private 4x4 transport.",
    price: "From $320",
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1509439581779-629c9b27602b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Spirit of Mecca",
    subtitle: "Premium Umrah Packages",
    description: "Highly curated spiritual journeys with 5* lodging and comprehensive logistical support for pilgrims.",
    price: "Custom Quote",
    tag: "Exclusive",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=600"
  }
];

const SpecialOffers: React.FC = () => {
  return (
    <section id="offers" className="py-28 bg-white border-y border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[10px]">Limited Availability</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Special Offers</h3>
            <p className="text-slate-500 text-lg">
              Unlock extraordinary value with our seasonal highlights. Premium Moroccan experiences at exclusive rates for our international guests.
            </p>
          </div>
          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 flex items-center gap-4">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-slate-900 font-bold text-sm">Booking Window</p>
              <p className="text-[10px] text-amber-800 font-bold uppercase">Now Open for 2024/25</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {offers.map((offer) => (
            <div key={offer.id} className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-900 uppercase tracking-widest shadow-sm">
                  {offer.tag}
                </div>
              </div>
              
              <div className="p-10 flex-1 flex flex-col">
                <div className="mb-6">
                  <span className="text-amber-600 text-xs font-bold uppercase tracking-widest block mb-2">{offer.subtitle}</span>
                  <h4 className="text-2xl font-bold text-slate-900 leading-tight">{offer.title}</h4>
                </div>
                <p className="text-slate-500 mb-10 text-sm leading-relaxed font-medium">
                  {offer.description}
                </p>
                <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Starting from</span>
                    <span className="text-2xl font-black text-slate-900">{offer.price}</span>
                  </div>
                  <a href="#contact" className="bg-amber-600 text-white px-8 py-3.5 rounded-2xl font-bold text-xs hover:bg-slate-900 transition-all flex items-center gap-2">
                    Book Trip <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;