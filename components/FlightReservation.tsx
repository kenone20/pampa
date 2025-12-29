
import React, { useState } from 'react';
import { 
  Plane, 
  Calendar, 
  Info, 
  ArrowRightLeft, 
  ShieldCheck, 
  PlaneTakeoff, 
  PlaneLanding, 
  Users,
  ArrowRight
} from 'lucide-react';

const FlightReservation: React.FC = () => {
  const [tripType, setTripType] = useState('round');
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    dates: '',
    travelers: '1'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { origin, destination, dates, travelers } = formData;

    if (!origin || !destination || !dates) {
      alert("Please fill in all the flight details to proceed with your inquiry.");
      return;
    }

    // Personalized confirmation alert
    const message = `Inquiry Confirmed!\n\nFlight: ${origin} to ${destination}\nDates: ${dates}\nTravelers: ${travelers}\nTrip Type: ${tripType === 'round' ? 'Round Trip' : 'One Way'}\n\nOur IATA certified desk will process your request. For immediate booking confirmation, please contact our agency desk in the contact section below.`;
    
    alert(message);

    // Scroll to contact for detailed inquiry as this is an agency desk simulation
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const swapCities = () => {
    setFormData(prev => ({
      ...prev,
      origin: prev.destination,
      destination: prev.origin
    }));
  };

  return (
    <section id="flights" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/3 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                <ShieldCheck className="w-3 h-3" /> Official IATA Member
              </div>
              <h3 className="text-4xl font-bold text-slate-900 font-serif leading-tight">
                Global Air Logistics <br/> <span className="text-amber-600">Tailored to You.</span>
              </h3>
              <p className="mt-6 text-slate-500 text-lg leading-relaxed">
                As a fully certified IATA agency, PAMPA VOYAGE provides direct access to all major international airlines. We manage your air travel with the same precision as your ground tours.
              </p>
            </div>

            <ul className="space-y-4">
              {['Preferred Partner Rates', '24/7 Flight Monitoring', 'Multi-City Itineraries', 'Premium Lounge Access'].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                  </div>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl relative">
              {/* Decorative plane tail background */}
              <Plane className="absolute -top-10 -right-10 w-64 h-64 text-white/5 rotate-12 -z-0" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <button 
                    type="button"
                    onClick={() => setTripType('round')}
                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${tripType === 'round' ? 'bg-amber-600 text-white' : 'bg-white/10 text-white/60 hover:bg-white/20'}`}
                  >
                    Round Trip
                  </button>
                  <button 
                    type="button"
                    onClick={() => setTripType('one')}
                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${tripType === 'one' ? 'bg-amber-600 text-white' : 'bg-white/10 text-white/60 hover:bg-white/20'}`}
                  >
                    One Way
                  </button>
                </div>

                <form onSubmit={handleSearch}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="relative">
                      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-4 mb-2 block">Departure City</label>
                      <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl p-4 focus-within:border-amber-500/50 transition-all">
                        <PlaneTakeoff className="w-5 h-5 text-amber-500 mr-4" />
                        <input 
                          type="text" 
                          name="origin"
                          value={formData.origin}
                          onChange={handleInputChange}
                          placeholder="From where?" 
                          className="bg-transparent text-white outline-none w-full placeholder:text-white/20 font-medium" 
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-4 mb-2 block">Arrival City</label>
                      <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl p-4 focus-within:border-amber-500/50 transition-all">
                        <PlaneLanding className="w-5 h-5 text-amber-500 mr-4" />
                        <input 
                          type="text" 
                          name="destination"
                          value={formData.destination}
                          onChange={handleInputChange}
                          placeholder="To where?" 
                          className="bg-transparent text-white outline-none w-full placeholder:text-white/20 font-medium" 
                        />
                      </div>
                      <button 
                        type="button"
                        onClick={swapCities}
                        className="absolute right-[-12px] top-[54px] w-8 h-8 bg-slate-800 rounded-full border border-white/10 flex items-center justify-center text-white z-20 hover:bg-amber-600 transition-colors hidden md:flex"
                      >
                          <ArrowRightLeft className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="md:col-span-2">
                      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-4 mb-2 block">Travel Dates</label>
                      <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl p-4">
                        <Calendar className="w-5 h-5 text-amber-500 mr-4" />
                        <input 
                          type="text" 
                          name="dates"
                          value={formData.dates}
                          onChange={handleInputChange}
                          placeholder="Select dates (e.g. Oct 12 - Oct 19)" 
                          className="bg-transparent text-white outline-none w-full placeholder:text-white/20 font-medium" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-4 mb-2 block">Travelers</label>
                      <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl p-4">
                        <Users className="w-5 h-5 text-amber-500 mr-4" />
                        <input 
                          type="number" 
                          name="travelers"
                          value={formData.travelers}
                          onChange={handleInputChange}
                          min={1} 
                          className="bg-transparent text-white outline-none w-full placeholder:text-white/20 font-medium" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3 text-white/40 text-xs">
                      <Info className="w-4 h-4" />
                      <span>Inquiry will be processed by our IATA desk.</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
                      <a 
                        href="#contact" 
                        className="text-amber-500 hover:text-white transition-colors text-sm font-bold flex items-center gap-2 group"
                      >
                        View Flight Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <button 
                        type="submit"
                        className="w-full md:w-auto px-12 py-5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-amber-900/40 flex items-center justify-center gap-3 active:scale-95"
                      >
                        Search Flights
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightReservation;
