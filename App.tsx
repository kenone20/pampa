
import React from 'react';
import WhyChooseUs from './components/WhyChooseUs';
import GeminiTripPlanner from './components/GeminiTripPlanner';
import AboutUs from './components/AboutUs';
import Collaborations from './components/Collaborations';
import TopDestinations from './components/TopDestinations';
import SpecialOffers from './components/SpecialOffers';
import Testimonials from './components/Testimonials';
import FlightReservation from './components/FlightReservation';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Premium Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="#" className="text-2xl font-black tracking-tighter text-amber-700">PAMPA VOYAGE</a>
          </div>
          <div className="hidden lg:flex items-center gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            <a href="#about-us" className="hover:text-amber-600 transition-colors">About</a>
            <a href="#destinations" className="hover:text-amber-600 transition-colors">Destinations</a>
            <a href="#offers" className="hover:text-amber-600 transition-colors text-amber-600">Offers</a>
            <a href="#flights" className="hover:text-amber-600 transition-colors">Flights</a>
            <a href="#why-pampa" className="hover:text-amber-600 transition-colors">Why Us</a>
            <a href="#reviews" className="hover:text-amber-600 transition-colors">Reviews</a>
            <a href="#collaborations" className="hover:text-amber-600 transition-colors">Network</a>
          </div>
          <a href="#contact" className="bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-amber-700 transition-all shadow-lg shadow-amber-200">
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&q=80&w=1920" 
            alt="Morocco Desert" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            The Magic of Morocco, <br/>Curated by Experts.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 font-light">
            Luxury, authenticity, and discovery. PAMPA VOYAGE brings you closer to the heart of the Sahara and the soul of the Medina.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#offers" className="px-8 py-4 bg-amber-600 rounded-full font-bold hover:bg-amber-700 transition-all w-full sm:w-auto">
              View Special Offers
            </a>
            <a href="#destinations" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full font-bold hover:bg-white/20 transition-all w-full sm:w-auto text-white">
              Explore Destinations
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUs />

      {/* Special Offers Section */}
      <SpecialOffers />

      {/* Destinations Section */}
      <TopDestinations />

      {/* Flight Reservation Section */}
      <FlightReservation />

      {/* Main Feature Section (Why Choose Us) */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Collaborations Section */}
      <Collaborations />

      {/* Interactive AI Planner Section */}
      <section id="ai-planner" className="py-24 bg-slate-50 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Dreaming of Morocco?</h2>
          <p className="text-gray-600 text-lg">
            Use our AI travel consultant to get immediate suggestions based on our 30 years of local expertise.
          </p>
        </div>
        <GeminiTripPlanner />
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-gray-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <span className="text-2xl font-black text-amber-700">PAMPA VOYAGE</span>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Licensed Moroccan Agency No. 12/2024. Your gateway to authentic experiences since 1994.
              </p>
              <div className="mt-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Office Address</p>
                <p className="text-sm text-slate-600">Av. Mohammed V, Guéliz, Marrakech, Morocco</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-widest">Expertise</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#ai-planner" className="hover:text-amber-600 transition-colors">Tailor-made Tours</a></li>
                <li><a href="#destinations" className="hover:text-amber-600 transition-colors">Group Expeditions</a></li>
                <li><a href="#offers" className="hover:text-amber-600 transition-colors">Luxury Retreats</a></li>
                <li><a href="#offers" className="hover:text-amber-600 transition-colors">Sahara Glamping</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-widest">Company</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#about-us" className="hover:text-amber-600 transition-colors">About Us</a></li>
                <li><a href="#destinations" className="hover:text-amber-600 transition-colors">Destinations</a></li>
                <li><a href="#collaborations" className="hover:text-amber-600 transition-colors">Partnerships</a></li>
                <li><a href="#reviews" className="hover:text-amber-600 transition-colors">Guest Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-widest">Direct Contact</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="tel:+212524000000" className="hover:text-amber-600 transition-colors font-bold">+212 524 000 000</a></li>
                <li><a href="mailto:contact@pampavoyage.com" className="hover:text-amber-600 transition-colors">contact@pampavoyage.com</a></li>
                <li><a href="#flights" className="hover:text-amber-600 transition-colors">IATA Air Desk</a></li>
                <li><a href="#why-pampa" className="hover:text-amber-600 transition-colors">Professional Certs</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-[10px] font-bold uppercase tracking-widest">
            <p>&copy; 2024 PAMPA VOYAGE. Moroccan Agency No. 12/2024.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-600">Privacy Policy</a>
              <a href="#" className="hover:text-gray-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;