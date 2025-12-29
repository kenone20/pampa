
import React from 'react';
import { 
  Verified, 
  HandCoins, 
  ConciergeBell, 
  GlobeLock, 
  Navigation, 
  Milestone,
  ArrowRight
} from 'lucide-react';

const advantages = [
  {
    id: 1,
    title: "Security Assurance",
    description: "Official Agency No. 12/2024. Your safety is our mandate, backed by the Kingdom's highest tourism certifications.",
    icon: Verified,
    color: "text-amber-500",
    bgColor: "bg-amber-50/50"
  },
  {
    id: 2,
    title: "Transparent Policies",
    description: "Crystal-clear contracts and zero-hidden fees. Our 'No-Surprise' pledge ensures your journey is as smooth as the Sahara dunes.",
    icon: HandCoins,
    color: "text-blue-500",
    bgColor: "bg-blue-50/50"
  },
  {
    id: 3,
    title: "Dedicated Support",
    description: "Our 24/7 Concierge isn't a call center; it's a team of local experts ready to turn any request into reality.",
    icon: ConciergeBell,
    color: "text-rose-500",
    bgColor: "bg-rose-50/50"
  },
  {
    id: 4,
    title: "Global Affiliations",
    description: "Strategic alliances with IATA and global luxury networks connect your Moroccan dream to the world's best standards.",
    icon: GlobeLock,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50/50"
  },
  {
    id: 5,
    title: "Deep Local Insight",
    description: "Beyond the brochures. We guide you to the riads, artisans, and oasis secrets that only 30 years of local living can uncover.",
    icon: Navigation,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50/50"
  },
  {
    id: 6,
    title: "Proven Heritage",
    description: "Born in 1994. Three decades of passion and storytelling. We don't just know Morocco; we are part of its fabric.",
    icon: Milestone,
    color: "text-orange-500",
    bgColor: "bg-orange-50/50"
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-pampa" className="py-28 bg-white relative overflow-hidden">
      {/* Subtle background decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-slate-50 rounded-bl-[10rem] -z-0 opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1 w-10 bg-amber-500 rounded-full"></span>
            <span className="text-amber-600 font-extrabold uppercase tracking-[0.3em] text-[10px]">The PAMPA Standards</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif leading-tight max-w-3xl">
            Authenticity Built Over <br/><span className="text-amber-600">Three Decades.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {advantages.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-start gap-10 group">
              {/* Refined Modern Icon Container */}
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 rounded-3xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-slate-200 group-hover:-translate-y-2 group-hover:rotate-3">
                  <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center transition-all duration-500 group-hover:scale-110`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} strokeWidth={1.5} />
                  </div>
                </div>
                {/* Accent dot that appears on hover */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white shadow-sm border border-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-1.5 h-1.5 rounded-full ${item.color.replace('text-', 'bg-')}`}></div>
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-amber-600 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-lg leading-relaxed mb-6 font-medium opacity-80">
                  {item.description}
                </p>
                <a href="#about-us" className="flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-amber-600 transition-all cursor-pointer">
                  <span className="tracking-widest uppercase text-[10px]">View Detail</span>
                  <div className="w-8 h-[1px] bg-slate-200 group-hover:bg-amber-600 group-hover:w-12 transition-all duration-500"></div>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Certifications Footer */}
        <div className="mt-28 p-12 rounded-[3rem] bg-slate-50/50 border border-slate-100 flex flex-wrap items-center justify-between gap-8">
           <div className="flex flex-col">
              <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1">Heritage</span>
              <span className="text-xl font-bold text-slate-900">Since 1994</span>
           </div>
           <div className="h-10 w-px bg-slate-200 hidden md:block"></div>
           <div className="flex flex-col">
              <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1">Authority</span>
              <span className="text-xl font-bold text-slate-900">Ministry Licensed</span>
           </div>
           <div className="h-10 w-px bg-slate-200 hidden md:block"></div>
           <div className="flex flex-col">
              <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1">Network</span>
              <span className="text-xl font-bold text-slate-900">IATA Member</span>
           </div>
           <div className="h-10 w-px bg-slate-200 hidden md:block"></div>
           <a href="#contact" className="bg-slate-900 text-white px-8 py-4 rounded-2xl flex items-center justify-center font-bold text-sm hover:bg-amber-600 transition-all shadow-xl shadow-slate-200">
             Contact Agency
           </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;