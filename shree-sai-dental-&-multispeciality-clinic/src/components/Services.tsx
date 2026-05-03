import React from 'react';
import { motion } from 'motion/react';
import { CLINIC_INFO } from '../constants';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Our Specialities
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-4">Comprehensive Care for <br className="hidden md:block" /> Every Smile</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We provide a wide range of oral health services from general checkups to advanced surgeries, ensuring you get the best treatment in muzaffarpur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLINIC_INFO.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-[2rem] border border-blue-50 hover:border-blue-200 transition-all hover:shadow-xl hover:shadow-blue-600/5 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -translate-y-8 translate-x-8 group-hover:scale-110 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-blue-950 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors">{service.description}</p>
                
                <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  <span className="text-blue-600 font-bold text-sm">Learn more</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
