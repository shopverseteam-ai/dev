import React from 'react';
import { motion } from 'motion/react';
import { CLINIC_INFO } from '../constants';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-blue-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Patient Stories</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-950">Join Thousands of <br /> Smiling Patients</h2>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-yellow-500 bg-white px-6 py-4 rounded-3xl border border-blue-50 shadow-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="font-bold text-blue-950 ml-2">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CLINIC_INFO.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white p-10 rounded-[2.5rem] border border-blue-50 shadow-sm relative group hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-100 group-hover:text-blue-200 transition-colors" />
              
              <div className="flex gap-1 text-yellow-400 mb-6">
                 {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              
              <p className="text-gray-600 italic text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600 text-xs font-semibold uppercase tracking-wider">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
