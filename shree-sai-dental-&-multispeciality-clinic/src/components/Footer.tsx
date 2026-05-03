import React from 'react';
import { CLINIC_INFO } from '../constants';
import { Facebook, Twitter, Instagram, Send, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-4 gap-12 mb-20">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Shree Sai <br /> <span className="text-blue-400 text-[10px] uppercase font-black block -mt-1 tracking-widest">Dental Clinic</span></h2>
          </div>
          <p className="text-blue-100/60 leading-relaxed mb-8 font-medium">
            Providing painless, modern dental treatments with a focus on trust, hygiene and patient comfort. Your smile is our priority.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors border border-white/10">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-8">Quick Links</h4>
          <ul className="space-y-4 font-medium text-blue-100/60">
            {['Home', 'About Us', 'Services', 'Pricing', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '')}`} className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-8">Services</h4>
          <ul className="space-y-4 font-medium text-blue-100/60">
            {CLINIC_INFO.services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  {service.title}
                </a>
              </li>
            ))}
            <li><a href="#services" className="text-blue-400 font-bold">See All Services →</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-8">Newsletter</h4>
          <p className="text-blue-100/60 mb-6 font-medium">Get dental health tips and latest clinic offers.</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-600 transition-colors font-medium"
            />
            <button className="absolute right-2 top-2 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-blue-100/40 text-sm font-medium">
          © {new Date().getFullYear()} {CLINIC_INFO.name}. All Rights Reserved.
        </p>
        <div className="flex items-center gap-2 text-sm text-blue-100/40 font-medium">
          Created with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for Healthy Smiles.
        </div>
      </div>
    </footer>
  );
}
