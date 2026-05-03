import React from 'react';
import { motion } from 'motion/react';
import { CLINIC_INFO } from '../constants';
import { Check, Info } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Transparent Pricing</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-4">Affordable Care for Everyone</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg leading-relaxed">
            Quality healthcare shouldn't be expensive. We offer competitive rates and flexible payment options for advanced treatments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-[2.5rem] p-8 lg:p-12 border border-blue-100 shadow-xl shadow-blue-900/5">
            <div className="space-y-4">
              {CLINIC_INFO.pricing.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-5 bg-white rounded-2xl border border-blue-100 hover:border-blue-300 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-blue-950 text-lg">{item.service}</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <span className="text-xl font-extrabold text-blue-600">{item.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white/50 backdrop-blur rounded-2xl border border-blue-100 flex items-start gap-4">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-sm text-blue-900/70 leading-relaxed font-medium">
                * Note: Prices are indicative and may vary based on the complexity of the case. 
                Final estimations will be provided after clinical examination by {CLINIC_INFO.doctor.name}.
              </p>
            </div>
            
            <div className="mt-10 text-center">
              <a
                href="#appointment"
                className="inline-block bg-blue-600 text-white px-10 py-5 rounded-full font-extrabold text-lg hover:bg-blue-700 transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                Book Your Consultation Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
