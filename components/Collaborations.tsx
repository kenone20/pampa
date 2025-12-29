
import React from 'react';
import { 
  Building2, 
  Tent, 
  Plane, 
  Car, 
  CreditCard, 
  Users, 
  ShieldCheck,
  Globe,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';

const partners = [
  {
    title: "International Airlines",
    subtitle: "Air & Flight Logistics",
    description: "Seamless global connections through our preferred IATA network and major international carriers.",
    icon: Plane,
    stats: "IATA Certified"
  },
  {
    title: "Secure Payments",
    subtitle: "Trusted Financials",
    description: "Accepting multi-currency payments via Visa, Mastercard, and secure international wire transfers.",
    icon: CreditCard,
    stats: "PCI Compliant"
  },
  {
    title: "Premium Hospitality",
    subtitle: "Hotels & Private Riads",
    description: "Exclusive partnerships with 5* luxury hotels and authentic boutique riads nationwide.",
    icon: Building2,
    stats: "Vetted Luxury"
  },
  {
    title: "Logistics Excellence",
    subtitle: "Private Fleet",
    description: "Modern, fully-insured fleet of 4x4s and luxury coaches maintained to European standards.",
    icon: Car,
    stats: "Safety First"
  },
  {
    title: "Cultural Experts",
    subtitle: "Certified Guides",
    description: "Collaboration with Ministry-certified historians and multilingual storytelling professionals.",
    icon: Users,
    stats: "Licensed Pros"
  },
  {
    title: "Luxury Glamping",
    subtitle: "Desert Specialists",
    description: "Access to private high-end bivouacs in the deep Sahara and Agafay stone desert.",
    icon: Tent,
    stats: "Eco-Luxury"
  }
];

const Collaborations: React.FC = () => {
  return (
    <section id="collaborations" className="py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 mb-6">
              <span className="text-amber-800 text-[10px] font-bold uppercase tracking-widest">Strategic Global Network</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Our Collaborations</h3>
            <p className="text-slate-500 text-lg leading-relaxed">
              We leverage an elite ecosystem of international and local partners to guarantee 
              uncompromising safety, security, and quality for our global clientele.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <p className="text-slate-900 font-bold">100% Verified</p>
              <p className="text-xs text-slate-500">Government Licensed Partners</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200 hover:border-amber-300 relative"
            >
              <div className="flex flex-col h-full relative z-10">
                <div className="mb-8 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center transition-all duration-500 group-hover:bg-amber-600 group-hover:scale-110">
                  <partner.icon className="w-7 h-7 text-slate-600 transition-colors duration-500 group-hover:text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">{partner.subtitle}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-bold">{partner.stats}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{partner.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {partner.description}
                  </p>
                </div>

                <a href="#why-pampa" className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between text-slate-400 group-hover:text-amber-600 transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-widest">View Credentials</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Sales & Trust Bar */}
        <div className="mt-20 pt-10 border-t border-slate-200 flex flex-wrap items-center justify-center gap-x-16 gap-y-8 opacity-40 hover:opacity-80 transition-opacity">
            <div className="flex items-center gap-2 text-slate-900 font-bold tracking-tighter text-lg uppercase">
              <Plane className="w-4 h-4" /> IATA AIR NETWORK
            </div>
            <div className="flex items-center gap-2 text-slate-900 font-bold tracking-tighter text-lg uppercase">
              <CreditCard className="w-4 h-4" /> SECURE PAYMENTS
            </div>
            <div className="flex items-center gap-2 text-slate-900 font-bold tracking-tighter text-lg uppercase">
              <Globe className="w-4 h-4" /> GLOBAL DISTRIBUTION
            </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm mb-8 font-medium italic">Interested in joining our premium agency network?</p>
          <a href="#contact" className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-amber-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 mx-auto max-w-fit">
            Become a Partner <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;