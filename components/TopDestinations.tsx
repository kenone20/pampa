
import React from 'react';
import { Destination } from '../types';
import { MapPin, ArrowRight } from 'lucide-react';

const destinations: Destination[] = [
  {
    id: 1,
    name: "Marrakech",
    description: "The Red City, where ancient soul meets modern luxury in a dance of colors and scents.",
    image: "https://images.unsplash.com/photo-1597212618440-806262de498b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Agafay Desert",
    description: "A rocky oasis just outside Marrakech, perfect for luxury glamping under the stars.",
    image: "https://images.unsplash.com/photo-1533050487297-09b450131914?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Merzouga Desert",
    description: "Home to the majestic Erg Chebbi dunes, offering the ultimate golden Sahara experience.",
    image: "https://images.unsplash.com/photo-1509439581779-629c9b27602b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Ait Ben Haddou",
    description: "An iconic UNESCO World Heritage site and a masterpiece of pre-Saharan clay architecture.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "Ouarzazate",
    description: "The Gateway to the Sahara and the legendary 'Hollywood of Africa' cinematic landscape.",
    image: "https://images.unsplash.com/photo-1590424753062-32517f3523fb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "Ourika Valley",
    description: "A refreshing escape in the High Atlas Mountains with lush gardens and cool mountain air.",
    image: "https://images.unsplash.com/photo-1549413247-49f3e4b4862a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    name: "Ouzoud Waterfalls",
    description: "The most spectacular waterfalls in Morocco, nestled in a verdant valley of olive trees.",
    image: "https://images.unsplash.com/photo-1623164917544-7740f99768a4?auto=format&fit=crop&q=80&w=800"
  }
];

const TopDestinations: React.FC = () => {
  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-2">Curated Journeys</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Top Destinations</h3>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Discover the most breathtaking corners of the Kingdom, from the vibrant Medinas to the silent depths of the Sahara.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div key={dest.id} className="group relative overflow-hidden rounded-[2rem] bg-gray-100 aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-500">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 text-amber-400 mb-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <MapPin className="w-3 h-3" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Morocco</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">{dest.name}</h4>
                <p className="text-xs text-gray-200 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed font-medium">
                  {dest.description}
                </p>
                <div className="mt-5 h-0.5 w-0 bg-amber-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
          
          <div className="group relative overflow-hidden rounded-[2rem] bg-amber-600 flex flex-col items-center justify-center p-10 text-center aspect-[3/4] shadow-xl shadow-amber-200 hover:-translate-y-2 transition-transform duration-500">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:rotate-12 transition-transform">
                <MapPin className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">Custom Journey?</h4>
            <p className="text-amber-50 text-xs mb-8 font-medium leading-relaxed">
              Don't see your dream spot? We specialize in tailoring itineraries to any location in Morocco.
            </p>
            <a href="#ai-planner" className="flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-xl font-bold text-sm hover:bg-amber-50 transition-colors shadow-lg">
              Request Bespoke
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;