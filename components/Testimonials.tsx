
import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Zafraan Hussain",
    location: "4 months ago",
    text: "Great service i couldn’t have enjoyed the quad/camel/show/dinner anymore would highly recommend this company and make sure you see Cherif he was amazing even our driver khalid 10/10",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Zafraan+Hussain&background=0D0D0D&color=fff",
    tour: "Quad & Camel Safari"
  },
  {
    id: 2,
    name: "Juliana Ybañez",
    location: "A year ago",
    text: "I really appreciate how they accommodate me, the guy infront and especially Mme Fatima Zahra. I'm looking for a cheaper flight and I found one... highly professional inquiry support.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Juliana+Ybanez&background=F59E0B&color=fff",
    tour: "Flight Inquiry"
  },
  {
    id: 3,
    name: "António Nunes (EmotionX4)",
    location: "3 years ago",
    text: "In 2020 before COVID lockdown, I had a tour organized with Pampa. It never happened. Last weekend I went to Marrakech. I got my money back with a smile. Can't get better than this for customer service.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=antonio",
    tour: "Marrakech Tour"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Google Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif mb-6">Real Guest Experiences</h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Direct feedback from our travelers who have explored Morocco and booked their journeys through our official IATA desk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all duration-500 flex flex-col">
              <Quote className="absolute top-8 right-10 w-12 h-12 text-slate-50 opacity-10 group-hover:text-amber-100 transition-colors" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-600 italic leading-relaxed mb-8 text-base">
                "{item.text}"
              </p>

              <div className="mt-auto flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border border-slate-100 object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{item.location}</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">{item.tour}</span>
                <div className="flex items-center gap-1 text-[10px] text-blue-600 font-bold uppercase tracking-tighter">
                  <CheckCircle className="w-3 h-3" /> Verified Review
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a 
              href="https://www.google.com/search?q=pampa+voyage+marrakech+reviews" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-600 transition-colors font-bold text-xs uppercase tracking-widest"
            >
              See All 500+ Reviews on Google
              <span className="w-8 h-[1px] bg-slate-200"></span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
