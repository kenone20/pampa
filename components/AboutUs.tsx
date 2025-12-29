
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform lg:-rotate-2 transition-transform hover:rotate-0 duration-500">
              <img 
                src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800" 
                alt="Moroccan Architecture" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-100 rounded-full -z-0 opacity-50 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-amber-200 w-[110%] h-[110%] rounded-full -z-0 border-dashed animate-spin-slow"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-2">Our Heritage</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Crafting the Soul of <br/>Moroccan Travel
              </h3>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in 1994, <strong>PAMPA VOYAGE</strong> was born from a singular, passionate vision: to bridge the gap between the curious traveler and the beating heart of Morocco. For over three decades, we have traversed the sun-drenched dunes of the Sahara and the labyrinthine alleys of the Fes Medina to curate experiences that are as authentic as they are unforgettable. Our journey is one of deep respect for our heritage, fueled by an unwavering commitment to professional excellence and international standards of safety.
              </p>
              
              <p>
                As a fully licensed agency with deep-rooted local expertise, we pride ourselves on being more than just a tour operator. We are your trusted cultural ambassadors. Whether you are seeking a private luxury retreat or a spirited group exploration, our team ensures every detail reflects the legendary Moroccan hospitality. Our international perspective allows us to anticipate the needs of global travelers while keeping the spirit of our traditions alive in every itinerary.
              </p>

              <p className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500 italic text-gray-800">
                "The upcoming <strong>CAN 2025 (Africa Cup of Nations)</strong> represents a historic milestone for our Kingdom. We are ready to welcome the world with unparalleled passion, offering football fans and travelers alike a premium gateway to the most vibrant cultural and sporting celebration in Africa's history."
              </p>
            </div>

            <div className="pt-4 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">30+</p>
                <p className="text-sm text-gray-500 uppercase tracking-tighter">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-500 uppercase tracking-tighter">Licensed Agency</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">CAN '25</p>
                <p className="text-sm text-gray-500 uppercase tracking-tighter">Official Readiness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
