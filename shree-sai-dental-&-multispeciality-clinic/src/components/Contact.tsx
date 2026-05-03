import React from 'react';
import { motion } from 'motion/react';
import { CLINIC_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Location & Reach</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-10 leading-tight">Visit Us at Our <br /> Muzaffarpur Clinic</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 text-xl mb-2">Our Address</h4>
                  <p className="text-gray-600 leading-relaxed max-w-sm">
                    {CLINIC_INFO.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 text-xl mb-2">Phone numbers</h4>
                  <p className="text-gray-600 font-medium">Primary: {CLINIC_INFO.contact.phone}</p>
                  <p className="text-gray-600 font-medium">WhatsApp: {CLINIC_INFO.contact.whatsapp}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 text-xl mb-2">Email Address</h4>
                  <p className="text-gray-600 font-medium">{CLINIC_INFO.contact.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-10 bg-blue-50 rounded-[3rem] border border-blue-100">
               <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-blue-600" />
                <h4 className="font-bold text-blue-950 text-xl">Working Hours</h4>
               </div>
               <div className="space-y-3">
                 {CLINIC_INFO.timings.map((time, idx) => (
                   <div key={idx} className="flex justify-between text-sm items-center py-2 border-b border-blue-200/50 last:border-0 font-medium">
                     <span className="text-blue-950">{time.day}</span>
                     <span className={time.time === 'Closed' ? 'text-red-500 font-bold' : 'text-gray-600'}>{time.time}</span>
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-blue-50"
          >
            <iframe
              src={CLINIC_INFO.contact.mapsUrl}
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
